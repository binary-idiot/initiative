<template>
	<ModalSubmit :modalName="modalName"
		title="Add Player" submitText="Add Player"
		@submitModal="addEntityToEncounter()" @closeModal="closeModal()">
		<form>
			<div class="order formInput">
				<label for="order">Order</label>
				<input type="text" name="order" v-model="order">
			</div>
			<div class="name formInput">
				<label for="name">Name</label>
				<input type="text" name="name" v-model="name">
			</div>
			<div class="hp formInput">
				<label for="hp">HP</label>
				<input type="text" name="hp" v-model="hp">
			</div>
		</form>
	</ModalSubmit>
</template>

<script>
import { mapActions } from 'vuex';
import ModalSubmit from '@/components/ModalSubmit.vue';

export default {
	name: 'TrackerAddModal',
	data() {
		return {
			order: '',
			name: '',
			hp: '',
			modalName: 'TrackerAddModal',
		};
	},
	components: {
		ModalSubmit,
	},
	methods: {
		addEntityToEncounter() {
			const { order, name, hp } = this;
			this.saveEntity({
				order, name, hp,
			});
			this.closeModal();
			this.order = '';
			this.name = '';
			this.hp = '';
		},
		...mapActions([
			'saveEntity',
			'closeModal',
		]),
	},
};
</script>

<style lang="scss" scoped>
	.TrackerAddModal{

		form{
			grid-column: 1 / span 3;
			display: flex;

			@media screen and (orientation: portrait) {
				flex-direction: column;
			}
			.formInput{
				display: flex;
				flex-direction: column;
				padding: 5px;
			}
		}
	}
</style>
