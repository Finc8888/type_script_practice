"use strict";
//Находит наибольшое число в массиве сложность O(N)
function greateNum(arr) {
    let greatestNum = 0;
    for (let item of arr) {
        if (item > greatestNum) {
            greatestNum = item;
        }
    }
    return greatestNum;
}
//Test
let tesArray = [45, -43, 2, 65, 43, 45, 876, 65, 4, 3, 243, 435646, -4534545345353];
console.log(` Greatest number of ${tesArray} is ${greateNum(tesArray)}`);
