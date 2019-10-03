/**
 * Inserts an item between each item of array
 * @param {Array} array
 * @param {*} itemBetween
 * @returns {Array} New Array
 */
const arrayInsertBetween = (array, itemBetween) => array.reduce((acc, item, i) => (
	i === 0
		? [...acc, item]
		: [...acc, typeof itemBetween === 'function' ? itemBetween(array[i - 1], item, i) : itemBetween, item]
), []);

module.exports = arrayInsertBetween;
