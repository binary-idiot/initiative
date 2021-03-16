<template>
	<div class="creature-list">
		<h3>Creature List</h3>
		<ul>
				<li v-for="creature in creaturePage" :key="creature.name">
					<CreatureListItem
						:creatureName="creature.name"
						@select-creature="onSelectCreature($event)">
					</CreatureListItem>
				</li>
		</ul>

		<CreatureListPageSelect
			:page="currentPage"
			@change-page="onChangePage($event)">
		</CreatureListPageSelect>
	</div>
</template>

<script>
import CreatureListItem from './CreatureListItem.vue';
import CreatureListPageSelect from './CreatureListPageSelect.vue';

export default {
	name: 'CreatureList',

	data() {
		return {
			currentPage: 0,
			creaturesPerPage: 15,
		};
	},

	emits: ['changeSelectedCreature'],

	components: {
		CreatureListItem,
		CreatureListPageSelect,
	},

	inject: ['creatures'],

	methods: {
		onSelectCreature(name) {
			const selected = this.creatures.find((m) => m.name === name);
			console.log(`${name} Selected`);
			this.$emit('changeSelectedCreature', selected);
		},
		onChangePage(page) {
			const oldPage = this.currentPage;
			if (page <= this.creatures.length / this.creaturesPerPage && page >= 0) {
				this.currentPage = page;
			} else {
				this.currentPage = oldPage;
			}
		},
	},

	computed: {
		creaturePage() {
			const pageStart = this.currentPage * this.creaturesPerPage;
			return this.creatures.slice(pageStart, pageStart + this.creaturesPerPage);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
