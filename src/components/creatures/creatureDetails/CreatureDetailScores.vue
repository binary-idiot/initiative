<template>
	<div class="creature-detail-scores">
		<ul class="scores">
			<li class="score" v-for="score in scores" :key="score.key">
				<span>{{ score.key.toUpperCase() }}</span>
				<br>
				<span>{{ score.value }} ({{ $func.calcMod(score.value) }})</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'CreatureDetailScores',

	props: {
		creature: Object,
	},

	computed: {
		scores() {
			return ['str', 'dex', 'con', 'int', 'wis', 'cha'].map((k) => ({
				key: k,
				value: this.creature[k],
			}));
		},
	},
};
</script>

<style lang="scss" scoped>
	.creature-detail-scores{

		.scores{
			width: 80%;
			margin: 30px auto;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			.score{
				padding: 3px;
				flex-grow: 1;
			}
		}
	}
</style>
