<template>
	<header>
		<h1>Initiative</h1>
	</header>
	<main>
		<MonsterList @change-selected-monster="selectedMonster = $event"></MonsterList>
		<div class="monster-details">
			<h2 v-if="selectedMonster">{{ selectedMonster.name }}</h2>
		</div>
	</main>
</template>

<script>

import MonsterList from './components/MonsterList.vue';

export default {
	name: 'App',
	components: {
		MonsterList,
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
		grid-template-areas:
			'monster-list monster-details monster-details';
	}

	.monster-details{
		grid-area: monster-details;
	}
}
</style>
