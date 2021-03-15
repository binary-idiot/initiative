<template>
	<div class="creature-list-item" @click="$emit('selectCreature', creatureName)">
		{{ creatureName }}
	</div>
</template>

<script>
export default {
	name: 'CreatureListItem',
	emits: ['selectCreature'],
	props: {
		creatureName: String,
	},
};
</script>

<style lang="scss" scoped>
.creature-list-item{
	padding: 5px;
	border: 1px solid black;
	&:hover{
		background-color: lightblue;
	}
}
</style>
