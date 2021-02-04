<template>
	<div class="monster-list-item" @click="$emit('selectMonster', monsterName)">
		{{ monsterName }}
	</div>
</template>

<script>
export default {
	name: 'MonsterListItem',
	emits: ['selectMonster'],
	props: {
		monsterName: String,
	},
};
</script>

<style lang="scss">
.monster-list-item{
	padding: 5px;
	border: 1px solid black;
	&:hover{
		background-color: lightblue;
	}
}
</style>
