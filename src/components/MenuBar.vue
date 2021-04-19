<template>
	<nav class="menu-bar">
		<router-link :to="{name: 'Creatures'}">
			<IconBase :width="24" :height="24" icon-name="creatures"><IconCreature /></IconBase>
		</router-link>
		<router-link :to="{name: 'Tracker'}">
			<IconBase :width="35" :height="35" icon-name="initiative"><IconSwords /></IconBase>
		</router-link>
		<router-link :to="{name: 'Settings'}">
			<IconBase :width="16" :height="16" icon-name="settings"><IconSettings /></IconBase>
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
	.icon{
		width: 5%;
	}
</style>
