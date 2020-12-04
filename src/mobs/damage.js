export function mob_damage({ client, world }) {
	client.on('use_entity', ({ target, mouse, sneaking }) => {
		console.log(target, mouse, sneaking)
		if (mouse === 1) {
			const mob = world.mobs.by_entity_id(target)

			console.log(mob)

			mob.dispatch('tmp', {})
		}
	})
}