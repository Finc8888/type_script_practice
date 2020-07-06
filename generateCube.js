"use strict";
/*
* Генерация кубов для задачи
*
*/
function generatorCube(N) {
    console.log(`Кол-во входных данных - ${N}`);
    let result = 0;
    let a = 1;
    let b = 0;
    while ((N - b) != 0) {
        let storage = a * (N - b);
        result += storage;
        a++;
        b++;
    }
    return result;
}
// test
// console.log(generatorCube(1));
// console.log(generatorCube(2));
// console.log(generatorCube(3));
// console.log(generatorCube(4));
// console.log(generatorCube(5));
// console.log(generatorCube(6));
// console.log(generatorCube(7));
// console.log(generatorCube(700));
console.time('test');
console.log(generatorCube(100000000000000000000));
console.timeEnd('test');
