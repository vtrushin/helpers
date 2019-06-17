const fromRange = require('./array-from-range');

it('A', () => {
    expect(
        fromRange(1, 5)
    ).toEqual(
        [1, 2, 3, 4]
    );
});

it('B', () => {
    expect(
        fromRange(5, -5)
    ).toEqual(
        [5, 4, 3, 2, 1, 0, -1, -2, -3, -4]
    );
});

it('C', () => {
    expect(
        fromRange(-6, -8)
    ).toEqual(
        [-6, -7]
    );
});

it('D', () => {
    expect(
        fromRange(0, 0)
    ).toEqual(
        []
    );
});
