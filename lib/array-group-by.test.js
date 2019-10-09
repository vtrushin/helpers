const groupBy = require('./array-group-by');

describe('Objects', () => {
    it('Object', () => {
        expect(
            groupBy([{ a: 'First group' }, { a: 'Second group' }, { a: 'First group' }, { a: 'Third group' }], item => item.a)
        ).toEqual(
            new Map([
                ['First group', [{ a: 'First group' }, { a: 'First group' }]],
                ['Second group', [{ a: 'Second group' }]],
                ['Third group', [{ a: 'Third group' }]]
            ])
        )
    });
});
