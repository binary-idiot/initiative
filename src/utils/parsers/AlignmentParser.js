// Alignment logic is mostly pulled from the 5e.tools parser
class AlignmentParser {
	static abvToFull(alignment) {
		if (!alignment) return null;
		if (typeof alignment === 'object') {
			if (alignment.special != null) {
				// alignment as special string
				return alignment.special;
			}
			// multiple alignments or alignments with special properties
			return `${alignment.alignment.map((a) => this.abvToFull(a)).join(' ')}${alignment.chance ? ` (${alignment.chance}%)` : ''}${alignment.note ? ` (${alignment.note})` : ''}`;
		}
		const align = alignment.toUpperCase();
		switch (align) {
		case 'L':
			return 'lawful';
		case 'N':
			return 'neutral';
		case 'NX':
			return 'neutral (law/chaos axis)';
		case 'NY':
			return 'neutral (good/evil axis)';
		case 'C':
			return 'chaotic';
		case 'G':
			return 'good';
		case 'E':
			return 'evil';
			// 'special' values
		case 'U':
			return 'unaligned';
		case 'A':
			return 'any alignment';
		default:
			return align;
		}
	}

	static parse(alignList) {
		if (alignList.some((align) => typeof align !== 'string')) {
			if (alignList.some((align) => typeof align === 'string')) throw new Error(`Mixed alignment types: ${JSON.stringify(alignList)}`);
			// filter out any nonexistent alignments
			const alignments = alignList.filter(
				(align) => align.alignment === undefined || align.alignment != null,
			);

			// handle special alignments and join multiple alignments with 'or'
			return alignments.map(
				(align) => (align.special != null || align.chance != null || align.note != null
					? this.abvToFull(align) : this.parse(align.alignment)),
			).join(' or ');
		}
		// assume all single-length arrays can be simply parsed
		if (alignList.length === 1) return this.abvToFull(alignList[0]);

		// a pair of abv's, e.g. 'L' 'G'
		if (alignList.length === 2) {
			return alignList.map((a) => this.abvToFull(a)).join(' ');
		}

		if (alignList.length === 3) {
			if (alignList.includes('NX') && alignList.includes('NY') && alignList.includes('N')) return 'any neutral alignment';
		}

		// longer arrays should have a custom mapping
		if (alignList.length === 5) {
			if (!alignList.includes('G')) return 'any non-good alignment';
			if (!alignList.includes('E')) return 'any non-evil alignment';
			if (!alignList.includes('L')) return 'any non-lawful alignment';
			if (!alignList.includes('C')) return 'any non-chaotic alignment';
		}

		if (alignList.length === 4) {
			if (!alignList.includes('L') && !alignList.includes('NX')) return 'any chaotic alignment';
			if (!alignList.includes('G') && !alignList.includes('NY')) return 'any evil alignment';
			if (!alignList.includes('C') && !alignList.includes('NX')) return 'any lawful alignment';
			if (!alignList.includes('E') && !alignList.includes('NY')) return 'any good alignment';
		}

		throw new Error(`Unmapped alignment: ${JSON.stringify(alignList)}`);
	}
}

export default AlignmentParser;
