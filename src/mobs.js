import { PassThrough } from 'stream'
import { EventEmitter } from 'events'

import { pipeline } from 'streaming-iterables'

import { scan } from './iterables.js'

function tmp(state, action) {
  return {
    ...state,
    position: {
      ...state.position,
      x: state.position.x + 0.2
    }
  }
}

function reduce_state(state, action) {
  return [
    tmp,
    //
  ].reduce((intermediate, fn) => fn(intermediate, action), state)
}

export function register_mobs(world) {
  const mobs = world.mobs.map(({ position, mob, level }, i) => {
    const initial_state = {
      position,
      dead: false,
    }

    const actions = new PassThrough({ objectMode: true })
    const events = new EventEmitter()

    pipeline(
      () => actions,
      scan(reduce_state, initial_state),
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
