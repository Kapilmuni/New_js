function compareNumbers(a, b, c) {
    if (a > b && a > c) {
        return "a is largest";
    } else if (a < b && a < c) {
        return "a is smallest";
    } else if (a === b && a === c) {
        return "a,b, and c are equal";
    } else {
        return "a is in between b and c";
    }
}

let x = compareNumbers(2, 3, 6);
console.log(x);
