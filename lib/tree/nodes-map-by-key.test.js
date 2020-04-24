const flattenByKey = require('./nodes-map-by-key');

it('common', () => {
    const node1_2 = {
        id: '1-2',
        children: []
    };

    const node1_1_2 = {
        id: '1-1-2',
        children: []
    };

    const node1_1_1 = {
        id: '1-1-1',
        children: []
    };

    const node1_1 = {
        id: '1-1',
        children: [node1_1_1, node1_1_2]
    };

    const root = {
        id: '1',
        children: [node1_1, node1_2]
    };

    expect(
        flattenByKey(root, 'children', node => node.id)
    ).toEqual(
        new Map([
            ['1', {
                id: '1',
                children: ['1-1', '1-2']
            }],
            ['1-1', {
                id: '1-1',
                children: ['1-1-1', '1-1-2']
            }],
            ['1-1-1', {
                id: '1-1-1',
                children: []
            }],
            ['1-1-2', {
                id: '1-1-2',
                children: []
            }],
            ['1-2', {
                id: '1-2',
                children: []
            }]
        ])
    );
});