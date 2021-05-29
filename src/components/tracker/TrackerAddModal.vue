<template>
	<ModalSubmit :modalName="modalName"
		title="Add Player" submitText="Add Player"
		@submitModal="addEntityToEncounter()" @closeModal="closeModal()">
		<form>
			<div class="order formInput">
				<label for="order">Order</label>
				<input type="number" name="order" v-model="order">
			</div>
			<div class="name formInput">
				<label for="name">Name</label>
				<input type="text" name="name" v-model="name">
			</div>
			<div class="hp formInput">
				<label for="hp">HP</label>
				<input type="number" name="hp" v-model="hp">
			</div>
			<div class="ac formInput">
				<label for="ac">AC</label>
				<input type="number" name="ac" v-model="ac">
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
			order: 0,
			name: '',
			hp: 0,
			ac: 0,
			modalName: 'TrackerAddModal',
		};
	},
	components: {
		ModalSubmit,
	},
	methods: {
		addEntityToEncounter() {
			const { order, name, hp, ac } = this;
			this.saveEntity({
				order, name, hp, ac,
			});
			this.closeModal();
			this.order = 0;
			this.name = '';
			this.hp = 0;
			this.ac = 0;
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
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-auto-rows: 1fr 1fr;

			.formInput{
				display: flex;
				flex-direction: column;
				padding: 5px;
				width: 25%;
			}

			.name{
				width: 75%;
				grid-column: 2 / span 2;
			}
		}
	}
</style>
