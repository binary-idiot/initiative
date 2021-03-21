<template>
	<div class="creature-detail-traits">
		<div class="creature-saves" v-if="saves">
			<strong>Saving Throws</strong> <span v-html="saves"></span>
		</div>
		<div class="creature-skills" v-if="skills">
			<strong>Skills</strong> <span v-html="skills"></span>
		</div>
		<div class="creature-resist" v-if="resist">
			<strong>Damage Resistances</strong> <span>{{ resist }}</span>
		</div>
		<div class="creature-immune" v-if="immune">
			<strong>Damage Immunities</strong> <span>{{ immune }}</span>
		</div>
		<div class="creature-conditions" v-if="conditions">
			<strong>Condtiton Immunities</strong> <span>{{ conditions }}</span>
		</div>
		<div class="creature-senses" >
			<strong>Senses</strong> <span> {{ senses }} </span>
		</div>
		<div class="creature-languages">
			<strong>Languages</strong> <span>{{ languages }}</span>
		</div>
		<div class="creature-chalange">
			<strong>Challange</strong> <span>{{ challange }}</span>
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
		listDamageTraits(list, type) {
			console.log(list);
			const objs = [];
			let dmgStr = list.map((dmg) => {
				if (typeof dmg === 'string') return dmg;
				objs.push(dmg);
				return '';
			})
				.filter(Boolean)
				.join(', ');

			if (objs.length > 0) {
				dmgStr = dmgStr.concat((dmgStr) ? '; ' : '',
					objs.map((obj) => {
						if (obj.special) return obj.special;
						const dmgList = Object.values(obj[type]);
						const dmgListStr = dmgList.slice(0, dmgList.length - 1)
							.join(', ')
							.concat(', and ', dmgList[dmgList.length - 1])
							.concat(' ', obj.note);
						return dmgListStr;
					})
						.join('; '));
			}

			return dmgStr;
		},
	},
	computed: {
		saves() {
			if ('save' in this.creature) return this.listTraits(this.creature.save);
			return undefined;
		},
		skills() {
			if ('skill' in this.creature) return this.listTraits(this.creature.skill);
			return undefined;
		},
		resist() {
			if ('resist' in this.creature) return this.listDamageTraits(this.creature.resist, 'resist');
			return undefined;
		},
		immune() {
			if ('immune' in this.creature) return this.listDamageTraits(this.creature.immune, 'immune');
			return undefined;
		},
		senses() {
			const senseStr = this.creature.senses?.join(', ');
			const passiveStr = `passive Perception ${this.creature.passive}`;

			return (senseStr) ? senseStr.concat(', ', passiveStr) : passiveStr;
		},
		conditions() {
			return this.creature.conditionImmune?.join(', ');
		},
		languages() {
			const languageStr = this.creature.languages?.join(', ');

			return languageStr || '---';
		},
		challange() {
			if (typeof this.creature.cr === 'string') return this.creature.cr;

			const str = (this.creature.cr.lair) ? `${this.creature.cr.lair} when encountered in lair`
				: `${this.creature.cr.coven} when part of a coven`;
			return `${this.challange.cr.cr}${(str) ? ` or ${str}` : ''}`;
		},
	},
};
</script>

<style lang="scss" scoped>
	.creature-detail-traits{
		padding: 10px;
		text-align: left;
		div{
			padding: 2px;
			padding-left: 2em;
			text-indent: -2em;
		}
	}
</style>
