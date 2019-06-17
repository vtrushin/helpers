const repeatString = require('./string-repeat');

it('regular', () => {
	expect(
		repeatString('A', 5)
	).toEqual(
		'AAAAA'
	);
});
