<template>
	<nav class="menu-bar">
		<router-link :to="{name: 'Creatures'}">
			<div class="creature-btn menu-btn">
				<IconBase :width="24" :height="24" icon-name="creatures"><IconCreature /></IconBase>
				<span>Creatures</span>
			</div>
		</router-link>
		<router-link :to="{name: 'Tracker'}">
			<div class="tracker-btn menu-btn">
				<IconBase :width="35" :height="35" icon-name="initiative"><IconSwords /></IconBase>
				<span>Tracker</span>
			</div>
		</router-link>
		<router-link :to="{name: 'Settings'}">
			<div class="settings-btn menu-btn">
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
	methods: {
		highlightMenuItem() {
			document.getElementsByClassName('menu-btn')
				.forEach((e) => {
					e.classList.remove('active-page');
				});

			const { path } = this.$route;
			const page = path.split('/')[1].toLowerCase();
			let menuBtn;
			switch (page) {
			case 'creatures':
				menuBtn = document.getElementsByClassName('creature-btn');
				break;
			case 'settings':
				menuBtn = document.getElementsByClassName('settings-btn');
				break;
			default:
				menuBtn = document.getElementsByClassName('tracker-btn');
				break;
			}

			menuBtn.forEach((e) => {
				e.classList.add('active-page');
			});
		},
	},
	watch: {
		$route() {
			this.highlightMenuItem();
		},
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

		background-color: $contrast-light;

		@media screen and (min-width: 800px),
			screen and (max-height: 400px){
			border-right: 3px solid $contrast-1;
			flex-direction: column;
			height: 100%;
			width: 100px;
		}

		a{
			color: $contrast-4;

			&:hover{
				color: $contrast-3;
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

		.active-page{
			color: $contrast-2;
		}
	}
</style>
