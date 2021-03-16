<template>
	<header>
		<h1>Initiative</h1>
	</header>

	<main>
		<CreatureList @change-selected-creature="selectedCreature = $event"></CreatureList>
		<CreatureDetails :creature="selectedCreature"></CreatureDetails>
		<UpdateBar></UpdateBar>
	</main>
</template>

<script>
import CreatureDetails from './components/creatures/creatureDetails/CreatureDetails.vue';
import CreatureList from './components/creatures/creatureList/CreatureList.vue';
import UpdateBar from './components/UpdateBar.vue';

export default {
	name: 'App',
	components: {
		CreatureList,
		CreatureDetails,
		UpdateBar,
	},

	data() {
		return {
			creatures: [],
			selectedCreature: null,
		};
	},

	provide() {
		return {
			creatures: this.creatures,
		};
	},

	async created() {
		// Fetch list of sources and then fetch each source and add to creatures
		try {
			const sources = await fetch('./data/sources.json').then((r) => r.json());

			sources.creatures.forEach(async (source) => {
				const data = await fetch(source).then((r) => r.json());

				data.forEach((e) => {
					this.creatures.push(e);
				});

				if (Array.isArray(this.creatures) && this.creatures.length) {
					this.selectedCreature = this.creatures[0];
				}
			});
		} catch (e) {
			console.error(e);
		}
	},

};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;

	main{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas:
			'creature-list creature-details creature-details';
	}
}
</style>
