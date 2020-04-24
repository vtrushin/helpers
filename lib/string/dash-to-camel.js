const dashToCamel = str => (
    str.replace(/(\-\w)/g, match => match[1].toUpperCase())
);

module.exports = dashToCamel;
