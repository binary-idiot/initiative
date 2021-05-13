<template>
	<div class="tracker-add-modal">
		<h3>Add Player</h3>
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
		<button @click="closeModal" class="closeButton">
			Close
		</button>
		<button @click="addEntityToEncounter" class="addButton">
			Add Entity
		</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import modalHelper from '@/mixins/modalHelper';

export default {
	name: 'TrackerAddModal',
	data() {
		return {
			order: '',
			name: '',
			hp: '',
		};
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
		]),
	},
	mixins: [modalHelper],
};
</script>

<style lang="scss" scoped>
	.tracker-add-modal{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		h3{
			grid-column: 1 / span 3;
		}

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

		button{
			margin-top: 10px;
		}

		.closeButton{
			grid-column: 1 / span 1;
		}

		.addButton{
			grid-column: 3 / span 1;
		}
	}
</style>
