<template>
	<section class="tracker-view">
		<h1>Initiative Tracker</h1>

		<TrackerList></TrackerList>
		<button @click="modalOpen = true">Add Player</button>
	</section>

	<ModalContainer :modalOpen="modalOpen">
		<TrackerAddModal @closeModal="modalOpen = false"></TrackerAddModal>
	</ModalContainer>
</template>

<script>
import TrackerList from '@/components/tracker/TrackerList.vue';
import TrackerAddModal from '@/components/tracker/TrackerAddModal.vue';
import ModalContainer from '@/components/ModalContainer.vue';

export default {
	name: 'Tracker',
	components: {
		TrackerList,
		TrackerAddModal,
		ModalContainer,
	},
	data() {
		return {
			modalOpen: false,
		};
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
