<template>
	<div class="creature-details">
		<template v-if="creature">
			<CreatureDetailHeader :creature="creature"></CreatureDetailHeader>
			<CreatureDetailBasic :creature="creature"></CreatureDetailBasic>
			<CreatureDetailScores :creature="creature"></CreatureDetailScores>
			<CreatureDetailTraits :creature="creature"></CreatureDetailTraits>
			<CreatureDetailSpecial :creature="creature"></CreatureDetailSpecial>
			<CreatureDetailActions :creature="creature"></CreatureDetailActions>
		</template>
	</div>
</template>

<script>
import CreatureDetailHeader from './CreatureDetailHeader.vue';
import CreatureDetailBasic from './CreatureDetailBasic.vue';
import CreatureDetailScores from './CreatureDetailScores.vue';
import CreatureDetailTraits from './CreatureDetailTraits.vue';
import CreatureDetailSpecial from './CreatureDetailSpecial.vue';
import CreatureDetailActions from './CreatureDetailActions.vue';

export default {
	name: 'CreatureDetails',

	components: {
		CreatureDetailHeader,
		CreatureDetailBasic,
		CreatureDetailScores,
		CreatureDetailTraits,
		CreatureDetailSpecial,
		CreatureDetailActions,
	},

	props: {
		creature: Object,
	},
};
</script>

<style lang="scss">
	ul{
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>

<style lang="scss" scoped>
.creature-details{
	margin: 20px;
	padding: 0 15px;
	border: 5px solid $contrast-1;
	border-radius: 1%;
	grid-area: creature-details;
	background-color: $background-alt;

	div{
		border-top: 2px solid $contrast-2;

		&:first-child, &.no-border{
			border-top: none;
		}
	}

}
</style>
