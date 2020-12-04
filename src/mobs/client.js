import { PassThrough } from 'stream'
import { on } from 'events'

import minecraftData from 'minecraft-data'
import UUID from 'uuid-1345'
import { reduce, pipeline } from 'streaming-iterables'

import { chunk_position, same_chunk } from '../chunk.js'
import { version } from '../settings.js'

import { Types } from './types.js'

const mcData = minecraftData(version)

const color_by_type = {
  mob: 'white',
  archiMob: 'gold',
  boss: 'red',
  npc: 'green',
  garde: 'blue',
}

const chunk_index = (x, z) => `${x}:${z}`

function write_mob(client, { mob: { entity_id, mob, level }, position }) {
  const { type, mob: entity_type, displayName } = Types[mob]

  const second_to_block_per_tick = v => (v / 20) * 8000

  client.write('spawn_entity_living', {
    entityId: entity_id,
    entityUUID: UUID.v4(),
    type: mcData.entitiesByName[entity_type].id,
    x: position.x,
    y: position.y,
    z: position.z,
    yaw: 0,
    pitch: 0,
    headPitch: 0,
    velocityX: 0,
    velocityY: 0,
    velocityZ: 0,
  })

  client.write('entity_metadata', {
    entityId: entity_id,
    metadata: [
      {
        key: 2,
        value: JSON.stringify({
          text: displayName,
          color: color_by_type[type],
          extra: level && [{ text: ` [Lvl ${level}]`, color: 'dark_red' }],
        }),
        type: 5,
      },
      {
        key: 3,
        type: 7,
        value: true,
      },
    ],
  })
}

export function update_clients(world) {
  const actions = new PassThrough({ objectMode: true })

  for (const mob of world.mobs.all) {
    pipeline(
      () => on(mob.events, 'state'),
      reduce((last_position, [{ position }]) => {
        if (last_position !== position) {
          actions.write({
            type: 'mob_position',
            payload: { mob, last_position, position },
          })
        }
        return position;
      }, null)
    )
  }

  function update_mobs({ events, client }) {
    events.on('chunk_loaded', ({ x, z }) => {
      actions.write({ type: 'client_chunk_loaded', payload: { client, x, z } })
    })

    events.on('chunk_unloaded', ({ x, z }) => {
      actions.write({
        type: 'client_chunk_unloaded',
        payload: { client, x, z },
      })
    })
  }

  pipeline(
    () => actions,
    reduce((chunks, { type, payload }) => {
      // console.log(type, payload)
      if (type === 'client_chunk_loaded') {
        const { client, x, z } = payload
        const chunk = chunks.get(chunk_index(x, z)) || { clients: [], mobs: [] }

        for (const mob of chunk.mobs) {
          write_mob(client, mob)
        }

        return new Map([
          ...chunks.entries(),
          [
            chunk_index(x, z),
            { ...chunk, clients: [...chunk.clients, client] },
          ],
        ])
      }
      if (type === 'client_chunk_unloaded') {
        const { client, x, z } = payload
        const chunk = chunks.get(chunk_index(x, z)) || { clients: [], mobs: [] }

        client.write('entity_destroy', {
          entityIds: chunk.mobs.map(({ mob: { entity_id } }) => entity_id),
        })

        return new Map([
          ...chunks.entries(),
          [
            chunk_index(x, z),
            { ...chunk, clients: chunk.clients.filter((c) => c !== client) },
          ],
        ])
      }
      if (type === 'mob_position') {
        const { mob, position, last_position } = payload
        const x = chunk_position(position.x)
        const z = chunk_position(position.z)
        const chunk = chunks.get(chunk_index(x, z)) || {
          clients: [],
          mobs: [],
        }

        if (last_position !== null) {
          const delta_x = (position.x * 32 - last_position.x * 32) * 128
          const delta_y = (position.y * 32 - last_position.y * 32) * 128
          const delta_z = (position.z * 32 - last_position.z * 32) * 128

          for (const client of chunk.clients) {
            /*client.write('rel_entity_move', {
              entityId: mob.entity_id,
              dX: delta_x,
              dY: delta_y,
              dZ: delta_z,
              onGround: true
            })*/
            client.write('entity_velocity', {
              entityId: mob.entity_id,
              velocityX: 1300,
              velocityY: 0,
              velocityZ: 0
            })
          }
        }

        if (last_position !== null && !same_chunk(last_position, position)) {
          const last_x = chunk_position(last_position.x)
          const last_z = chunk_position(last_position.z)
          const last_chunk = chunks.get(chunk_index(last_x, last_z))

          return new Map([
            ...chunks.entries(),
            [
              chunk_index(last_x, last_z),
              {
                ...last_chunk,
                mobs: last_chunk.mobs.filter(
                  ({ mob: { entity_id } }) => entity_id !== mob.entity_id
                ),
              },
            ],
            [
              chunk_index(x, z),
              {
                ...chunk,
                mobs: [...chunk.mobs, { mob, position }],
              },
            ],
          ])
        } else {
          return new Map([
            ...chunks.entries(),
            [
              chunk_index(x, z),
              {
                ...chunk,
                mobs: [
                  ...chunk.mobs.filter(
                    ({ mob: { entity_id } }) => entity_id !== mob.entity_id
                  ),
                  { mob, position },
                ],
              },
            ],
          ])
        }
      }
    }, new Map())
  )

  return update_mobs
}
