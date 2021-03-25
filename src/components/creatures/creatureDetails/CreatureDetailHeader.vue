<template>
	<div class="creature-detail-header">
		<h2 class="creature-name">{{ creature.name }}</h2>
		<div>
			<span class="creature-type">{{ $func.capitalize(creatureSize) }} {{ creatureType }}</span>
			|
			<span class="creature-alignment">{{ alignment }}</span>
		</div>
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
	.creature-detail-header{
		padding-bottom: 5px;
	}
</style>
