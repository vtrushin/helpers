/**
 * Groups items by key returning from keyGetter function
 *
 * @param {any[]} list
 * @param {function} keyGetter
 * @returns {Map<any, any>}
 */
const groupMapBy = (list, keyGetter) => {
    const map = new Map();

    list.forEach(item => {
        const key = keyGetter(item);
        const collection = map.get(key);

        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });

    return map;
};

module.exports = groupMapBy;
