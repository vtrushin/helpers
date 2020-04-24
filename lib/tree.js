const walkTree = require('./tree/walk');
const flattenByKey = require('./tree/nodes-map-by-key');

const filterTree = (root, childrenField, predicate) => {
    const nodeInfos = new Map();
    const filteredNodes = [];

    const transitions = new Map();

    walkTree(
        root,
        childrenField,
        (child, parent, index) => {
            if (!parent) {
                if (predicate(child)) {
                    // return copy of root
                }

                return;
            }

            nodeInfos.set(child, {
                parent,
                index
            });

            if (predicate(child, parent, index)) {
                filteredNodes.push(child);
            }
        }
    );

    return filteredNodes;

    // console.log(123, nodeInfos, filteredNodes);
};

// const filterTree = (tree, childrenField, predicate) => {
//     const nodeCopies = new Map();
//
//     walkTree(
//         tree,
//         node => node[childrenField],
//         (child, parent) => {
//             if (!predicate(child)) {
//                 return;
//             }
//
//             const childCopy = {
//                 ...child,
//                 [childrenField]: []
//             };
//
//             nodeCopies.set(child, childCopy);
//
//             if (parent) {
//                 // console.log('parent', parent, nodeCopies.get(parent));
//                 nodeCopies.get(parent)[childrenField].push(childCopy);
//             }
//         }
//     );
//
//     return nodeCopies.get(tree);
// };

const tree = {
    name: '1',
    children: [
        {
            name: '1-1',
            children: [
                {
                    name: '1-1-1',
                    children: []
                },
                {
                    name: '1-1-2',
                    children: []
                },
                {
                    name: '1-1-3',
                    children: []
                }
            ]
        },
        {
            name: '1-2',
            children: []
        }
    ]
};

console.log(flattenByKey(tree, 'children', node => node.name));

// console.log(
//     filterTree(
//         tree,
//         'children',
//         (node, parent, index) => {
//             console.log(
//                 123,
//                 node.name,
//                 parent && parent.name,
//                 index
//             );
//
//             return node.name.includes('1-1-');
//         }
//     )
// );
