<template>
	<nav class="menu-bar">
		<router-link :to="{name: 'Creatures'}">
			<div>
				<IconBase :width="24" :height="24" icon-name="creatures"><IconCreature /></IconBase>
				<span>Creatures</span>
			</div>
		</router-link>
		<router-link :to="{name: 'Tracker'}">
			<div>
				<IconBase :width="35" :height="35" icon-name="initiative"><IconSwords /></IconBase>
				<span>Tracker</span>
			</div>
		</router-link>
		<router-link :to="{name: 'Settings'}">
			<div>
				<IconBase :width="16" :height="16" icon-name="settings"><IconSettings /></IconBase>
				<span>Settings</span>
			</div>
		</router-link>
	</nav>
</template>

<script>
import IconBase from '@/components/icons/IconBase.vue';
import IconCreature from '@/components/icons/menu/IconCreature.vue';
import IconSwords from '@/components/icons/menu/IconSwords.vue';
import IconSettings from '@/components/icons/menu/IconSettings.vue';

export default {
	name: 'MenuBar',
	components: {
		IconBase,
		IconCreature,
		IconSwords,
		IconSettings,
	},
};
</script>

<style lang="scss" scoped>
	.menu-bar{
		border-top: 3px solid $contrast-1;
		height: 100px;
		width: 100%;

		position: fixed;
		bottom: 0;
		left: 0;

		display: flex;
		flex-direction: row;
		align-content: center;

		@media screen and (min-width: 800px),
			screen and (max-height: 400px){
			flex-direction: column;
			height: 100%;
			width: 100px;
		}
		a{
			color: $contrast-3;

			&:hover{
				color: $contrast-2;
			}

			margin: auto;
			padding: 10px;
			div{

				height: fit-content;
				.icon{
					height: 60px;
				}
				span{
					display: inline-block;
					width: 100%;
				}
			}
		}

		background-color: $contrast-light;
	}
</style>
