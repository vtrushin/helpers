const arrayFromCount = require('./array-from-count');

const arrayFromRange = (from, to, processFn) => {
    const count = Math.abs(from - to);

    return arrayFromCount(count, i => {
        const value = from + i * to / Math.abs(to);
        return processFn && typeof processFn === 'function' ? processFn(value) : value
    });
};

module.exports = arrayFromRange;
