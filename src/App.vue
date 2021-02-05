<template>
	<header>
		<h1>Initiative</h1>
	</header>

	<main>
		<MonsterList @change-selected-monster="selectedMonster = $event"></MonsterList>
		<MonsterDetails :monster="selectedMonster"></MonsterDetails>
	</main>
</template>

<script>
import MonsterDetails from './components/MonsterDetails.vue';
import MonsterList from './components/MonsterList.vue';

export default {
	name: 'App',
	components: {
		MonsterList,
		MonsterDetails,
	},

	data() {
		return {
			monsters: [],
			selectedMonster: null,
		};
	},

	provide() {
		return {
			monsters: this.monsters,
		};
	},

	async created() {
		// Fetch list of sources and then fetch each source and add to monsters
		try {
			const sources = await fetch('./data/sources.json').then((r) => r.json());

			sources.monsters.forEach(async (source) => {
				const data = await fetch(source).then((r) => r.json());

				data.forEach((e) => {
					this.monsters.push(e);
				});

				if (Array.isArray(this.monsters) && this.monsters.length) {
					this.selectedMonster = this.monsters[0];
				}
			});
		} catch (e) {
			console.log(e);
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
			'monster-list monster-details monster-details';
	}
}
</style>
