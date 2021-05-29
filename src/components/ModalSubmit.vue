<template>
	<teleport to="body">
		<div class="modal-container" :class="modalName" v-show="isOpen">
			<div class="modal-body">
				<h3 class="modal-title">{{ title }}</h3>
				<div class="modal-content">
					<slot></slot>
				</div>
				<button @click="closeModal" class="close-button">
					{{ closeText }}
				</button>
				<button @click="submitModal" class="submit-button">
					{{ submitText }}
				</button>
			</div>
		</div>
	</teleport>
</template>

<script>
import modal from '@/mixins/modal';

export default {
	name: 'ModalSubmit',
	mixins: [modal],
};
</script>

<style lang="scss" scoped>
	@import '@/assets/styles/_modal.scss';

	.modal-body{
		display: grid;
		grid-template-areas:
		'title title'
		'content content'
		'close submit';

		.modal-title{
			grid-area: title;
		}

		.modal-content{
			grid-area: content;
		}

		button{
			margin-top: 10px;
			width: fit-content;
		}

		.close-button{
			grid-area: close;
		}

		.submit-button{
			grid-area: submit;
			justify-self: end;
		}
	}
</style>
