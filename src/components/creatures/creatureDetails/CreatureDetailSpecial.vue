<template>
	<div class="creature-detail-special">
		<ul v-if="creature.trait">
			<li v-for="(trait, index) in creature.trait" :key="index">
				<p>
					<strong>{{ trait.name }}. </strong>
					<span v-html="parseEntries(trait.entries, '\n')"></span>
				</p>
			</li>
		</ul>

		<div v-if="creature.spellcasting" class="spellcasting">
			<div v-for="spellcasting in creature.spellcasting" :key="spellcasting.name">
				<p>
					<strong>{{ spellcasting.name }}. </strong>
					<span v-html="parseEntries(spellcasting.headerEntries, '\n')"></span>
				</p>
				<ul v-if="spellcasting.spells">
					<li v-for="(spells, key) in spellcasting.spells" :key="key">
						{{ spellTitle(spells, key) }}<span v-html="parseEntries(spells.spells, ', ')"></span>
					</li>
				</ul>
			</div>
		</div>
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
		parseEntries(entries, join) {
			return entries.map((entry) => TagParser.parse(entry))
				.join(join);
		},
		spellTitle(spells, key) {
			if (key === '0') return 'Cantrips (at will): ';
			return `${this.$func.ordinal(key)} level (${spells.slots} slot${(spells.slots > 1) ? 's' : ''}): `;
		},
	},
};
</script>

<style lang="scss" scoped>
	.creature-detail-special{
		text-align: left;

		.spellcasting{
			li{
				padding: 3px 0;
			}
		}
	}
</style>
