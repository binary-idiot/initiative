<template>
	<div class="update-bar" v-if="updateExists">
		<span>An update is available</span>
		<br>
		<button @click="refreshApp">Update</button>
	</div>
</template>

<script>
import update from '@/mixins/update';

export default {
	name: 'UpdateBar',
	mixins: [update],
};
</script>

<style lang="scss" scoped>
	.update-bar{
		bottom: 15px;
		right: 50px;
		position: fixed;
		z-index: 150;
		width: max-content;
		padding: 10px;

		background-color: lightgray;

		button{
			margin-top: 5px;
		}
	}
</style>
