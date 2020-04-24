const camelToDash = str => (
    str.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase())
);

module.exports = camelToDash;
