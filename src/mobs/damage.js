export function mob_damage({ client, world }) {
  let state = null
  client.on('state', (e) => (state = e))

  client.on('use_entity', ({ target, mouse, sneaking }) => {
    console.log(target, mouse, sneaking)
    if (mouse === 1) {
      const mob = world.mobs.by_entity_id(target)

      mob.dispatch('damage', {})
    }
  })
}
