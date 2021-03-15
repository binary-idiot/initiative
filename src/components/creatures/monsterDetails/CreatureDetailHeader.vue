<template>
	<div class="creature-detail-header">
		<h2>{{ creature.name }}</h2>
		<span>{{ creatureSize }} {{ creatureType }}</span>
	</div>
</template>

<script>
export default {
	name: 'CreatureDetailHeader',

	props: {
		creature: Object,
	},

	computed: {
		creatureSize() {
			switch (this.creature.size) {
			case 'T':
				return 'tiny';
			case 'S':
				return 'small';
			case 'M':
				return 'medium';
			case 'L':
				return 'large';
			case 'H':
				return 'huge';
			case 'G':
				return 'gigantic';
			default:
				return null;
			}
		},

		creatureType() {
			const { type } = this.creature;
			if (typeof type === 'string') {
				return type;
			}

			return `${type.type} (${type.tags}) `;
		},
	},
};
</script>

<style lang="scss" scoped>

</style>
