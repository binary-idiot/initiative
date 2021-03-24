<template>
	<div class="creature-detail-special" v-if="creature.trait">
		<ul>
			<li v-for="(trait, index) in creature.trait" :key="index">
				<p><strong>{{ trait.name }}.</strong> <span v-html="parseEntries(trait.entries)"></span></p>
			</li>
		</ul>
	</div>
</template>

<script>
import TagParser from '@/utils/parsers/TagParser';

export default {
	name: 'CreatureDetailSpecial',
	props: {
		creature: Object,
	},
	methods: {
		parseEntries(entries) {
			return entries.map((entry) => TagParser.parse(entry))
				.join('\n');
		},
	},
};
</script>

<style lang="scss" scoped>
	.creature-detail-special{
		text-align: left;
	}
</style>
