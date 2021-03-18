<template>
	<div class="creature-details">
		<template v-if="creature">
			<CreatureDetailHeader :creature="creature"></CreatureDetailHeader>
			<CreatureDetailBasic :creature="creature"></CreatureDetailBasic>
			<CreatureDetailScores :creature="creature"></CreatureDetailScores>
		</template>
	</div>
</template>

<script>
import CreatureDetailHeader from './CreatureDetailHeader.vue';
import CreatureDetailBasic from './CreatureDetailBasic.vue';
import CreatureDetailScores from './CreatureDetailScores.vue';

export default {
	name: 'CreatureDetails',

	components: {
		CreatureDetailHeader,
		CreatureDetailBasic,
		CreatureDetailScores,
	},

	props: {
		creature: Object,
	},
};
</script>

<style lang="scss" scoped>
.creature-details{
	margin: 20px;
	border: 5px solid $contrast-1;
	border-radius: 1%;
	grid-area: creature-details;
	background-color: $background-alt;
}
</style>
