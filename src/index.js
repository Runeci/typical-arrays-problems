
exports.max =function max (array) {
    if(!array) { return [] }
    if (array.length > 0){
        return Math.max.apply(null, array);
    } else {
        return 0;
    }
};

exports.min = function min (array) {
    if(!array) { return [] }
    if (array.length > 0){
        return Math.min.apply(null, array);
    } else {
        return 0;
    }
};


exports.avg = function avg (array) {
    if(!array) { return [] }
    if (array.length > 0){
        let sum = array.reduce((sum, current) => sum + current, 0);
        return (sum / array.length)
    } else {
        return 0;
    }
};
