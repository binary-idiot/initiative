<template>
	<div class="creature-detail-action-block">
			<h3>{{ title }}</h3>
			<slot></slot>
			<ul>
				<li v-for="action in actions" :key="action.name">
					<strong v-html="parseStr(action.name)"></strong>
					<span v-html="parseEntries(action.entries, '\n')"></span>
				</li>
			</ul>
		</div>
</template>

<script>
import TagParser from '@/utils/parsers/TagParser';

export default {
	name: 'CreatureDetailActionBlock',
	props: {
		actions: Object,
		title: String,
	},
	methods: {
		parseStr(str) {
			return `${TagParser.parse(str)}. `;
		},
		parseEntries(entries, join) {
			return entries.map((entry) => {
				if (!entry.items) return TagParser.parse(entry);

				const listStart = '<ul class="subactions">';
				return listStart.concat('\n', entry.items
					.map((item) => `<li><strong>${item.name}</strong>${TagParser.parse(item.entry)}</li>`)
					.join('\n'))
					.concat('\n', '</li>');
			})
				.join(join);
		},
	},
};
</script>

<style lang="scss" scoped>
	.creature-detail-action-block{
		h3{
			color: $contrast-2;
			margin-bottom: 6px;
			border-bottom: 2px solid $contrast-2;
		}

		ul{
			li{
				padding: 10px 0;

				span ::v-deep .subactions li{
					padding: 10px;
				}
			}
		}
	}
</style>
