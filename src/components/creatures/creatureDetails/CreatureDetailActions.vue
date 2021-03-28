<template >
	<div class="creature-detail-actions no-border">
		<CreatureDetailActionBlock v-if="creature.action" :actions="creature.action"
			title="Actions"></CreatureDetailActionBlock>
		<CreatureDetailActionBlock v-if="creature.reaction" :actions="creature.reaction"
			title="Reactions"></CreatureDetailActionBlock>
		<CreatureDetailActionBlock v-if="creature.legendary" :actions="creature.legendary"
			title="Legendary Actions">{{ legendaryHeader }}</CreatureDetailActionBlock>
	</div>
</template>

<script>
import CreatureDetailActionBlock from './CreatureDetailActionBlock.vue';

export default {
	name: 'CreatureDetailActions',
	components: {
		CreatureDetailActionBlock,
	},
	props: {
		creature: Object,
	},
	computed: {
		legendaryHeader() {
			if (this.creature.legendaryHeader) return this.creature.legendaryHeader;
			return `The ${this.creature.legendaryGroup.name} can take ${this.creature.legendaryHeader || 3} legendary actions,
			choosing from the options below.
			Only one legendary action can be used at a time
			and only at the end of another creature's turn.
			The ${this.creature.legendaryGroup.name}
			regains spent legendary actions at the start of its turn.`;
		},
	},
};
</script>

<style lang="scss" scoped>
	.creature-detail-actions{
		text-align: left;
	}
</style>
