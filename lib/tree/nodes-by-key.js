const walk = require('./walk');

const nodesByKey = (root, childrenField, keyGetter) => {
    const obj = {};

    walk(root, childrenField, (node, parent, i) => {
        obj[keyGetter(node, parent, i)] = {
            ...node,
            [childrenField]: node[childrenField].map(
                (childNode, childI) => keyGetter(childNode, node, childI)
            )
        };
    });

    return obj;
};

module.exports = nodesByKey;
