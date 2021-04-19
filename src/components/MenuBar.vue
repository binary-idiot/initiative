<template>
	<nav class="menu-bar">
		<IconBase :width="24" :height="24" icon-name="creature"><IconCreature /></IconBase>
		<IconBase class="swords" :width="35" :height="35"
		icon-name="swords"><IconSwords /></IconBase>
		<IconBase :width="16" :height="16" icon-name="settings"><IconSettings /></IconBase>
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
		width: 10%;
	}
</style>
