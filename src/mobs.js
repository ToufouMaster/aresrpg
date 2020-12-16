import { PassThrough } from 'stream'
import { EventEmitter } from 'events'

import { pipeline } from 'streaming-iterables'

import { scan } from './iterables.js'
import { pathfinding } from './pathfinding.js'

const directions = [
  { x: -1, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 0, y: 0, z: -1 },
  { x: 0, y: 0, z: 1 },

  { x: -1, y: 0, z: -1 },
  { x: -1, y: 0, z: 1 },
  { x: 1, y: 0, z: -1 },
  { x: 1, y: 0, z: 1 },
]

async function get_block(world, { x, y, z }) {
  const chunk = await world.chunks.load(chunk_position(x), chunk_position(z))

  return chunk.getBlock({ x: x % 16, y, z: z % 16 })
}

async function is_walkable(world, { x, y, z }) {
  const under = await get_block(world, { x, y: y - 1, z })
  const block = await get_block(world, { x, y, z })
  const front = await get_block(world, { x, y: y + 1, z })

  return (
    under.boundingBox === 'block' &&
    block.boundingBox === 'empty' &&
    front.boundingBox === 'empty'
  )
}

async function reduce_damage(state, { type, payload }, world) {
  if (type === 'damage') {
    const { source } = payload

    const equal = (a, b) => a.x === b.x && a.y === b.y && a.z === b.z

    const { open, closed, path } = await pathfinding({
      start: state.position,
      is_target(node) {
        return equal(node, source.position)
      },
      async neighbors(node) {
        const jump_height = 1

        return (
          await Promise.all(
            Array.from({
              length: jump_height * 2 + 1,
            })
              .flatMap((e, i) =>
                directions.map((dt) => ({
                  x: node.x + dt.x,
                  y: node.y + i - jump_height,
                  z: node.z + dt.z,
                }))
              )
              .map(async (point) => [point, await is_walkable(world, point)])
          )
        )
          .filter(([point, walkable]) => walkable)
          .map(([point]) => point)
      },
      heuristic(a, b) {
        return (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2
      },
      equal,
    })

    return {
      ...state,
      open,
      closed,
      path,
    }
  }
}

function reduce_state(state, action, world) {
  return [
    reduce_damage,
    //
  ].reduce(
    async (intermediate, fn) => fn(await intermediate, action, world),
    state
  )
}

export function register_mobs(world) {
  const mobs = world.mobs.map(({ position, mob, level }, i) => {
    const initial_state = {
      path: [position],
      open: [],
      closed: [],
      dead: false,
    }

    const actions = new PassThrough({ objectMode: true })
    const events = new EventEmitter()

    pipeline(
      () => actions,
      scan(
        (state, action) => reduce_state(state, action, world.get()),
        initial_state
      ),
      async (states) => {
        for await (const state of states) events.emit('state', state)
      }
    )

    return {
      entity_id: world.next_entity_id + i,
      mob,
      level,
      events,
      dispatch(type, payload) {
        actions.write({ type, payload })
      },
    }
  })

  const { next_entity_id } = world

  return {
    ...world,
    next_entity_id: next_entity_id + mobs.length,
    mobs: {
      all: mobs,
      by_entity_id(id) {
        if (id >= next_entity_id && id <= next_entity_id + mobs.length)
          return mobs[id - next_entity_id]
        else return null
      },
    },
  }
}
