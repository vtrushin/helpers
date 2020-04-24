const insertBetween = require('./insert-between');

describe('Literals', () => {
	it('Zero', () => {
		expect(
			insertBetween([1, 2, 3], 0)
		).toEqual(
			[1, 0, 2, 0, 3]
		)
	});

	it('Calculated value', () => {
		expect(
			insertBetween([1, 2, 3], (prevItem, nextItem, i) => `[${i}] ${prevItem}-${nextItem}`)
		).toEqual(
			[1, '[1] 1-2', 2, '[2] 2-3', 3]
		)
	});
});

describe('Objects', () => {
	it('Object', () => {
		expect(
			insertBetween([{ a: 1 }, { a: 2 }, { a: 3 }], { a: 0 })
		).toEqual(
			[{ a: 1 }, { a: 0 }, { a: 2 }, { a: 0 }, { a: 3 }]
		)
	});
});
