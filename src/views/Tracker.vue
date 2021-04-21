<template>
	<section class="tracker-view">
		<h1>Initiative Tracker</h1>
		<h3>Work in progress</h3>

		<TrackerList></TrackerList>
	</section>
</template>

<script>
import TrackerList from '@/components/tracker/TrackerList.vue';

export default {
	name: 'Tracker',
	components: {
		TrackerList,
	},
};
</script>

<style lang="scss" scoped>
	.tracker-view{
		width: 100%;
		height: max-content;
		border: 3px solid $contrast-light;
	}
</style>
