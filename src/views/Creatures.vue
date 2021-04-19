<template>
	<section class="creatures-view">
		<CreatureList v-if="creatures"></CreatureList>
		<CreatureDetails :creature="creature" v-if="creature"></CreatureDetails>
	</section>
</template>

<script>
import CreatureDetails from '@/components/creatures/creatureDetails/CreatureDetails.vue';
import CreatureList from '@/components/creatures/creatureList/CreatureList.vue';

export default {
	name: 'Creatures',
	components: {
		CreatureList,
		CreatureDetails,
	},
	data() {
		return {
			creature: this.getCreatureFromRoute(),
		};
	},
	inject: ['creatures'],
	methods: {
		getCreatureFromRoute() {
			const { params } = this.$route;
			const name = (params.creature) ? decodeURI(params.creature) : this.creatures?.[0].name;
			return this.creatures?.find((c) => c.name === name);
		},
	},
	watch: {
		$route() {
			this.creature = this.getCreatureFromRoute();
		},
	},
};
</script>

<style lang="scss" scoped>
	.creatures-view{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
		grid-template-areas:
			'creature-list creature-list creature-list'
			'creature-details creature-details creature-details';

		@media screen and (min-width: 750px) {
			grid-template-areas:
			'creature-list creature-details creature-details';
		}
	}
</style>
