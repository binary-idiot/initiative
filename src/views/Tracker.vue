<template>
	<section class="tracker-view">
		<h1>Initiative Tracker</h1>

		<TrackerList></TrackerList>
		<button @click="openModal()">Add Player</button>
	</section>

	<TrackerAddModal></TrackerAddModal>
</template>

<script>
import TrackerList from '@/components/tracker/TrackerList.vue';
import TrackerAddModal from '@/components/tracker/TrackerAddModal.vue';

export default {
	name: 'Tracker',
	components: {
		TrackerList,
		TrackerAddModal,
	},
	methods: {
		openModal() {
			this.$store.dispatch('openModal', 'TrackerAddModal');
		},
	},
};
</script>

<style lang="scss" scoped>
	.tracker-view{
		width: 100%;
		height: max-content;
		border: 3px solid $contrast-light;

		button{
			margin: 10px 0;
		}
	}
</style>
