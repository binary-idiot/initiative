<template>
	<div class="creature-detail-basics">
		<div class="creature-ac"><strong>Armor Class</strong> {{ armorClass }}</div>
		<div class="creature-hp"></div>
		<div class="creature-speed"></div>
	</div>
</template>

<script>
export default {
	name: 'CreatureDetailBasic',
	props: {
		creature: Object,
	},
	computed: {
		armorClass() {
			let acStr = '';

			this.creature.ac.forEach((acObj) => {
				let subStr = '';
				if (typeof acObj === 'number') {
					subStr = acObj;
				} else {
					subStr = `${acObj.ac} 
					${(acObj.from) ? `(${acObj.from})` : ''}
					${(acObj.condition) ? acObj.condition : ''}`;
				}
				acStr += (acStr === '') ? subStr : `, ${subStr}`;
			});

			return acStr;
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
