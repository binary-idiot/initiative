<template>
	<div class="creature-detail-basics">
		<div class="creature-ac"><strong>Armor Class</strong> <span v-html="armorClass"></span></div>
		<div class="creature-hp"><strong>Hit Points</strong> {{ creature.hp.average }}
		(<em>{{ creature.hp.formula }}</em>)</div>
		<div class="creature-speed"><strong>Speed</strong> {{ speed }}</div>
	</div>
</template>

<script>
import TagParser from '@/utils/parsers/TagParser';

export default {
	name: 'CreatureDetailBasic',
	props: {
		creature: Object,
	},
	computed: {
		armorClass() {
			// Credit to /^C(ode )?hunky Naito$/uigyms
			// from webdev and web_design discord for suggesting rewrite

			const acArr = this.creature.ac.map((acObj) => {
				// returning the number here is fine as the join later on will turn it into a string anyway
				if (typeof acObj === 'number') return acObj;

				return [
					acObj.ac,
					acObj.from ? `(${TagParser.parse(acObj.from.join(', '))})` : '',
					acObj.condition ? TagParser.parse(acObj.condition) : '',
				]
					.filter(Boolean) // strip out any falsish values (replaces the inline ternaries)
					.join(' ');
			});

			return acArr.join(', ');
		},
		speed() {
			// Credit to /^C(ode )?hunky Naito$/uigyms
			// from webdev and web_design discord for suggesting rewrite

			// for readabilities sake separating the map function out here
			const transformSpeed = ([type, speedData]) => {
				if (typeof speedData === 'number') return `${type} ${speedData}ft`;

				return [
					type,
					`${speedData.number}ft`,
					speedData.condition,
				]
					.join(' ');
			};

			return Object.entries(this.creature.speed)
				.filter(([key]) => key !== 'canHover') // You can remove other keys here, if you are I'd create a set and use the `.has` method
				.map(transformSpeed)
				.join(', ');
		},
	},
};
</script>

<style lang="scss" scoped>
	.creature-detail-basics{
		text-align: left;
		margin: 15px;
		padding: 10px;
		border: 2px $contrast-1;
		border-style: solid none;
	}
</style>
