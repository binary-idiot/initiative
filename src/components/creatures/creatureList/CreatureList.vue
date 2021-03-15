<template>
	<div class="creature-list">
		<h3>Creature List</h3>
		<ul>
				<li v-for="creature in creatures" :key="creature.name">
					<CreatureListItem
					:creatureName="creature.name"
					@select-creature="onSelectCreature($event)">
					</CreatureListItem>
				</li>
		</ul>
	</div>
</template>

<script>
import CreatureListItem from './CreatureListItem.vue';

export default {
	name: 'CreatureList',
	emits: ['changeSelectedCreature'],
	components: {
		CreatureListItem,
	},
	inject: ['creatures'],
	methods: {
		onSelectCreature(name) {
			const selected = this.creatures.find((m) => m.name === name);
			console.log(`${name} Selected`);
			this.$emit('changeSelectedCreature', selected);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.creature-list{
	grid-area: creature-list;

	ul{
		list-style: none;
		padding: 0;

		li{
			&:nth-child(even){
				background-color: lightgray;
			}

			&:nth-child(odd){
				background-color: white;
			}
		}
	}
}
</style>
