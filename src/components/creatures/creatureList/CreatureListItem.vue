<template>
	<div class="creature-list-item">
		<router-link
		:to="{name: 'Creature', params: {creature: creatureName}}">
		{{ creatureName }}
		</router-link>
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

	a{
		display: inline-block;
		width: 100%;
		height: 100%;
		color: inherit;
		text-decoration: none;

		&:hover{
			color: inherit;
		}
	}
}
</style>
