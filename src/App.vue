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
			// Credit to /^C(ode )?hunky Naito$/uigyms
			// from webdev and web_design discord for suggesting rewrite
			const sourceResponse = await fetch('./data/sources.json');
			const sources = await sourceResponse.json();

			const results = await Promise.all(
				sources.creatures.map(async (source) => {
					const response = await fetch(source);
					return response.json();
				}),
			);

			this.creatures.push(...results.flat()); // consistent order

			this.selectedCreature = this.creatures?.[0];
		} catch (e) {
			console.error(e);
		}
	},

};
</script>

<style lang="scss">
body{
	background-color: $background;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	main{
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
}
</style>
