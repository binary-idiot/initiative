<!-- Icon system from: https://github.com/sdras/vue-sample-svg-icons -->
<template>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg"
	:width="width"
	:height="height"
	viewBox="0 0 18 18"
	:aria-labelledby="iconName"
	role="presentation"
  >
	<title :id="iconName" lang="en">{{iconName}} icon</title>
	<g :fill="iconColor">
		<slot />
	</g>
  </svg>
</template>

<script>
export default {
	props: {
		iconName: {
			type: String,
		},
		width: {
			type: [Number, String],
			default: 18,
		},
		height: {
			type: [Number, String],
			default: 18,
		},
		iconColor: {
			type: String,
			default: 'currentColor',
		},
	},
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
