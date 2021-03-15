<template>
	<div class="creature-details">
		<template v-if="creature">
			<CreatureDetailHeader :creature ="creature"></CreatureDetailHeader>
		</template>
	</div>
</template>

<script>
import CreatureDetailHeader from './CreatureDetailHeader.vue';

export default {
	name: 'CreatureDetails',

	components: {
		CreatureDetailHeader,
	},

	props: {
		creature: Object,
	},
};
</script>

<style lang="scss" scoped>
.creature-details{
	grid-area: creature-details;
}
</style>
