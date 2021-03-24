<template>
	<div class="creature-details">
		<template v-if="creature">
			<CreatureDetailHeader :creature="creature"></CreatureDetailHeader>
			<CreatureDetailBasic :creature="creature"></CreatureDetailBasic>
			<CreatureDetailScores :creature="creature"></CreatureDetailScores>
			<CreatureDetailTraits :creature="creature"></CreatureDetailTraits>
			<CreatureDetailSpecial :creature="creature"></CreatureDetailSpecial>
		</template>
	</div>
</template>

<script>
import CreatureDetailHeader from './CreatureDetailHeader.vue';
import CreatureDetailBasic from './CreatureDetailBasic.vue';
import CreatureDetailScores from './CreatureDetailScores.vue';
import CreatureDetailTraits from './CreatureDetailTraits.vue';
import CreatureDetailSpecial from './CreatureDetailSpecial.vue';

export default {
	name: 'CreatureDetails',

	components: {
		CreatureDetailHeader,
		CreatureDetailBasic,
		CreatureDetailScores,
		CreatureDetailTraits,
		CreatureDetailSpecial,
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
}
</style>
