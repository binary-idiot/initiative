<template>
	<div class="creature-detail-header">
		<h2>{{ creature.name }}</h2>
		<span class="creature-type">{{ $func.capitalize(creatureSize) }} {{ creatureType }}</span>
		|
		<span class="creature-alignment">{{ alignment }}</span>
	</div>
</template>

<script>
import AlignmentParser from '@/utils/parsers/AlignmentParser';

export default {
	name: 'CreatureDetailHeader',

	props: {
		creature: Object,
	},

	computed: {
		creatureSize() {
			return this.$func.sizeToFull(this.creature.size);
		},

		creatureType() {
			const { type } = this.creature;
			if (typeof type === 'string') {
				return type;
			}
			if (type.tags) {
				return `${type.type} (${type.tags}) `;
			}
			if (type.swarmSize) {
				return `swarm of ${this.$func.sizeToFull(type.swarmSize)} ${type.type}s`;
			}

			return undefined;
		},

		alignment() {
			return AlignmentParser.parse(this.creature.alignment);
		},
	},
};
</script>

<style lang="scss" scoped>

</style>
