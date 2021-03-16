<template>
	<div class="creature-details">
		<template v-if="creature">
			<CreatureDetailHeader :creature="creature"></CreatureDetailHeader>
			<CreatureDetailScores :creature="creature"></CreatureDetailScores>
		</template>
	</div>
</template>

<script>
import CreatureDetailHeader from './CreatureDetailHeader.vue';
import CreatureDetailScores from './CreatureDetailScores.vue';

export default {
	name: 'CreatureDetails',

	components: {
		CreatureDetailHeader,
		CreatureDetailScores,
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
