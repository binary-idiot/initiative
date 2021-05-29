export default {
	props: {
		modalName: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		closeText: {
			type: String,
			default: 'Close',
		},
		submitText: {
			type: String,
			default: 'Submit',
		},
	},
	methods: {
		closeModal() {
			this.$emit('closeModal');
		},
		submitModal() {
			this.$emit('submitModal');
		},
	},
	computed: {
		isOpen() {
			return this.$store.getters.isActiveModal(this.modalName);
		},
	},
};
