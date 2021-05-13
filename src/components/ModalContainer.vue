<template>
	<teleport to="body">
		<div class="modal-container" v-show="modalOpen">
			<div class="modal-content">
				<slot></slot>
			</div>
		</div>
	</teleport>
</template>

<script>
export default {
	name: 'ModalContainer',
	props: {
		modalOpen: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
	.modal-container{
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

		.modal-content {
			background-color: $background;
			margin: 15% auto; /* 15% from the top and centered */
			padding: 20px;
			border: 5px solid $contrast-1;
			width: fit-content; /* Could be more or less, depending on screen size */
			border-radius: 25px;
		}
	}
</style>
