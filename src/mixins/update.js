export default {
	data() {
		return {
			reg: null,
			updateExists: false,
			refreshing: false,
		};
	},
	created() {
		document.addEventListener('swUpdated', this.updateAvalible, { once: true });
		navigator.serviceWorker.addEventListener('controllerchange', () => {
			if (this.refreshing) return;
			this.refreshing = true;

			window.location.reload();
		});
	},
	methods: {
		updateAvalible(event) {
			this.reg = event.detail;
			this.updateExists = true;
		},
		refreshApp() {
			this.updateExists = false;
			if (!this.reg || !this.reg.waiting) return;
			this.reg.waiting.postMessage({ type: 'SKIP_WAITING' });
		},
	},
};
