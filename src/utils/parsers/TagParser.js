class TagParser {
	static replaceTag(match, tag, paramStr) {
		const params = (paramStr) ? paramStr.split('|') : undefined;
		switch (tag) {
		case 'item':
		case 'spell':
		case 'creature':
		case 'condition':
		case 'skill':
		case 'i':
			return `<em>${params[0]}</em>`;
		case 'dice':
		case 'damage':
			return `<strong>${params[0]}</strong>`;
		case 'dc':
			return `DC: ${params[0]}`;
		case 'atk': {
			const weaponType = params[0].split(',')
				.map((wt) => ((wt === 'mw') ? 'melee' : 'ranged'));
			return `<em>${(weaponType.length === 2)
				? `${weaponType[0]} or ${weaponType[1]}` : weaponType[0]} weapon attack</em>`;
		}
		case 'hit':
			return `+${params[0]}`;
		case 'h':
			return '<em>Hit:</em>';
		case 'recharge':
			return `<strong>(Recharge ${(params[0]) ? `${params[0]}-6` : 6})</strong>`;
		case 'chance':
			return params[1];
		default:
			throw new Error(`Tag ${tag} not defined`);
		}
	}

	static parse(str) {
		const regex = /{@(\w*)(?: ([^}]*))*}/g;

		return str.replace(regex, this.replaceTag);
	}
}

export default TagParser;
