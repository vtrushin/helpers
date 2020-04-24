const walk = require('./walk');

const nodesMapByKey = (root, childrenField, keyGetter) => {
    const map = new Map();

    walk(root, childrenField, (node, parent, i) => {
        map.set(keyGetter(node, parent, i), {
            ...node,
            [childrenField]: node[childrenField].map(
                (childNode, childI) => keyGetter(childNode, node, childI)
            )
        });
    });

    return map;
};

module.exports = nodesMapByKey;
