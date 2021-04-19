<template>
	<span>
		<button @click="$emit('changePage', page - 1)">
			<IconBase class="icon-default" icon-name="left-arrow"><IconCaretLeftFill /></IconBase>
			<IconBase class="icon-hover" icon-name="left-arrow-hover"><IconCaretLeft /></IconBase>
		</button>

		<input type="number" :value="pageNum" @change="enterPageNum($event)">

		<button @click="$emit('changePage', page + 1)">
			<IconBase class="icon-default" icon-name="right-arrow"><IconCaretRightFill /></IconBase>
			<IconBase class="icon-hover" icon-name="right-arrow-hover"><IconCaretRight /></IconBase>
		</button>
	</span>
</template>

<script>
import IconBase from '@/components/icons/IconBase.vue';
import IconCaretLeftFill from '@/components/icons/arrows/IconCaretLeftFill.vue';
import IconCaretLeft from '@/components/icons/arrows/IconCaretLeft.vue';
import IconCaretRightFill from '@/components/icons/arrows/IconCaretRightFill.vue';
import IconCaretRight from '@/components/icons/arrows/IconCaretRight.vue';

export default {
	name: 'CreatureListPageSelect',
	emits: ['changePage'],
	components: {
		IconBase,
		IconCaretLeftFill,
		IconCaretLeft,
		IconCaretRightFill,
		IconCaretRight,
	},
	props: {
		page: Number,
	},
	methods: {
		enterPageNum(event) {
			this.$emit('changePage', event.target.value - 1);
		},
	},
	computed: {
		pageNum() {
			return this.page + 1;
		},
	},
};
</script>

<style lang="scss" scoped>
	button {
		width: 2em;
		& .icon-default {
			display: inline;
		}
		& .icon-hover {
			display: none;
		}

		&:hover {
			& .icon-default {
			display: none;
			}
			& .icon-hover {
				display: inline;
			}
		}
	}

	input {
		width: 2em;
		margin: 10px;
		text-align: center;

		&::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		&[type=number] {
			-moz-appearance: textfield;

		}
	}
</style>
