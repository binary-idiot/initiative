<template>
	<div class="monster-list">
		<h3>Monster List</h3>
		<ul>
				<li v-for="monster in monsters" :key="monster.name">
					<MonsterListItem
					:monsterName="monster.name"
					@select-monster="onSelectMonster($event)">
					</MonsterListItem>
				</li>
		</ul>
	</div>
</template>

<script>
import MonsterListItem from './MonsterListItem.vue';

export default {
	name: 'MonsterList',
	emits: ['changeSelectedMonster'],
	components: {
		MonsterListItem,
	},
	inject: ['monsters'],
	methods: {
		onSelectMonster(name) {
			const selected = this.monsters.find((m) => m.name === name);
			console.log(`${name} Selected`);
			this.$emit('changeSelectedMonster', selected);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.monster-list{
	grid-area: monster-list;

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
