<template>
	<div class="monster-details">
		<template v-if="monster">
			<h2>{{ monster.name }}</h2>
			<span>{{ monsterSize }} {{ monsterType }}</span>
		</template>
	</div>
</template>

<script>
export default {
	name: 'MonsterDetails',
	props: {
		monster: Object,
	},
	computed: {
		monsterSize() {
			switch (this.monster.size) {
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

		monsterType() {
			const { type } = this.monster;
			if (typeof type === 'string') {
				return type;
			}

			return `${type.type} (${type.tags}) `;
		},
	},
};
</script>

<style lang="scss">
.monster-details{
	grid-area: monster-details;
}
</style>
