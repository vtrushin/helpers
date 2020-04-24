// because Object.keys(new Date()).length === 0;
// we have to do some additional check
const isEmpty = obj => (
    Object.keys(obj).length === 0 && obj.constructor === Object
);

module.exports = isEmpty;
