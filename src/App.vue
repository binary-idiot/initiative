<template>
	<header>
		<router-link to="/">
			<h1>Initiative</h1>
		</router-link>
	</header>

	<main>
		<template v-if="creaturesLoaded">
			<router-view></router-view>
		</template>
		<template v-else>
			<h2>Content is loading...</h2>
		</template>
		<UpdateBar></UpdateBar>
		<MenuBar></MenuBar>
	</main>
</template>

<script>
import UpdateBar from './components/UpdateBar.vue';
import MenuBar from './components/MenuBar.vue';

export default {
	name: 'App',
	components: {
		UpdateBar,
		MenuBar,
	},

	data() {
		return {
			creatures: [],
			creaturesLoaded: false,
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
			const sourceResponse = await fetch('/data/sources.json');
			const sources = await sourceResponse.json();

			const results = await Promise.all(
				sources.creatures.map(async (source) => {
					const response = await fetch(source);
					return response.json();
				}),
			);

			this.creatures.push(...results.flat()); // consistent order

			this.creaturesLoaded = true;
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
}
</style>

<style lang="scss" scoped>
	a{
		color: inherit;
		text-decoration: none;
	}
</style>
