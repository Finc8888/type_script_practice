"use strict";
// import timeExec from './existDuplicate';
/*
 *Вычисление факториала
 */
function factorial(N) {
    let next = 1;
    let res = 1;
    while (next <= N) {
        res *= next;
        next++;
    }
    return res;
}
/*
 *Вычисление обратного факториала
 */
function infactorial(N) {
    let next = 1;
    let res = N;
    while (res > 1) {
        res /= next;
        next++;
    }
    return next - 1;
}
console.log(factorial(5));
console.log(factorial(10));
console.log(infactorial(1000000));
console.log(infactorial(60000000));
console.log(infactorial(3600000000));
console.log(infactorial(86400000000));
console.log(infactorial(604800000000));
console.log(infactorial(31190400000000));
// test
// timeExec(factorial,5,true);
// timeExec(factorial,10,true);
