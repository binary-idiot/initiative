<template>
	<div class="creature-detail-traits">
		<div class="creature-saves">
			<strong>Saving Throws</strong> <span v-html="saves"></span>
		</div>
		<div class="creature-skills">
			<strong>Skills</strong> <span v-html="skills"></span>
		</div>
		<div class="creature-resist" v-if="resist">
			<strong>Damage Resistances</strong> <span>{{ resist }}</span>
		</div>
		<div class="creature-immune" v-if="immune">
			<strong>Damage Immunities</strong> <span>{{ immune }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CreatureDetailTraits',
	props: {
		creature: Object,
	},
	methods: {
		listTraits(trait) {
			return Object.entries(trait)
				.map(([type, mod]) => ` ${this.$func.capitalize(type)} <em>${mod}</em>`)
				.join(', ');
		},
		listDamage(list) {
			if (typeof list === 'undefined') return undefined;
			const objs = [];
			const dmgStr = list.map((dmg) => {
				if (typeof dmg === 'string') return dmg;
				objs.push(dmg);
				return '';
			})
				.join(', ');

			if (objs) {
				dmgStr.concat('; ',
					objs.map((obj) => {
						const dmgList = obj.find((e) => Array.isArray(e));
						dmgList.slice(0, dmgList.length - 2)
							.join(', ')
							.concat(', and ', dmgList.at(-1))
							.concat(' ', obj.note);

						return dmgList;
					})
						.join('; '));
			}

			return dmgStr;
		},
	},
	computed: {
		saves() {
			return this.listTraits(this.creature.save);
		},
		skills() {
			return this.listTraits(this.creature.skill);
		},
		resist() {
			return this.listDamage(this.creature.resist);
		},
		immune() {
			return this.listDamage(this.creature.immune);
		},
	},
};
</script>

<style lang="scss" scoped>
	.creature-detail-traits{
		padding: 10px;
		text-align: left;
	}
</style>
