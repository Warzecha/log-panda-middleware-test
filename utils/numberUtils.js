exports.round = (value, decimalPlaces = 2) => {
    return parseFloat(value).toFixed(decimalPlaces);
};

exports.randomInRange = (min, max) => {
    return Math.random() * (+max - +min) + +min;
};
