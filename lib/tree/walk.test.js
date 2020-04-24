const walkTree = require('./walk');

it('common', () => {
    const node1_2 = {
        name: '1-2',
        children: []
    };

    const node1_1_2 = {
        name: '1-1-2',
        children: []
    };

    const node1_1_1 = {
        name: '1-1-1',
        children: []
    };

    const node1_1 = {
        name: '1-1',
        children: [node1_1_1, node1_1_2]
    };

    const root = {
        name: '1',
        children: [node1_1, node1_2]
    };

    const mockCallback = jest.fn();

    walkTree(root, 'children', mockCallback);

    expect(mockCallback.mock.calls).toEqual(
        [
            [root, null, 0],
            [node1_1, root, 0],
            [node1_1_1, node1_1, 0],
            [node1_1_2, node1_1, 1],
            [node1_2, root, 1]
        ]
    );
});
