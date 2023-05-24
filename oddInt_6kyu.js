var findOdd = function (xs) {
    var final;
    var newXs = xs.sort(function (a, b) { return a - b; });
    if (newXs.length === 1) {
        return xs[0];
    }
    else {
        var _loop_1 = function (num) {
            var newArr = newXs.filter(function (x) { return x === num; });
            console.log(newArr);
            if (newArr.length % 2 !== 0) {
                final = newArr[0];
            }
        };
        for (var num = newXs[0]; num <= newXs.slice(-1)[0]; num++) {
            _loop_1(num);
        }
    }
    return final || 0;
};
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
