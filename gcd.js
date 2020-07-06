"use strict";
/*
* Определение наибольщого общего делителя
*/
function gcd(a, b) {
    if (b > a) {
        [b, a] = [a, b];
    }
    let remainder = 1;
    while (remainder > 0) {
        remainder = a % b;
        if (remainder == 0)
            return b;
        a = b;
        b = remainder;
    }
    return b;
}
console.log(gcd(126, 210));
