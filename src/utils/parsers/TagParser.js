class TagParser {
	static replaceTag(match, tag, paramStr) {
		const params = paramStr.split('|');
		switch (tag) {
		case 'item':
		case 'spell':
			return `<em>${params[0]}</em>`;
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
