export default {
	capitalize(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	},
	sizeToFull(size) {
		switch (size.toUpperCase()) {
		case 'T':
			return 'tiny';
		case 'S':
			return 'small';
		case 'M':
			return 'medium';
		case 'L':
			return 'large';
		case 'H':
			return 'huge';
		case 'G':
			return 'gigantic';
		default:
			return null;
		}
	},
	calcMod(ability) {
		return Math.floor((ability - 10) / 2);
	},
	ordinal(num) {
		const n = parseInt(num, 10);
		switch (n) {
		case 1:
			return '1st';
		case 2:
			return '2nd';
		case 3:
			return '3rd';
		default:
			return `${n}th`;
		}
	},
};
