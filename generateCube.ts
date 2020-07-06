/*
* Генерация кубов для задачи
*
*/
function generatorCube(N: number){
    console.log(`Кол-во входных данных - ${N}`);
    let result: number = 0;
    let a: number = 1;
    let b: number = 0;
    while ((N - b) != 0){
        let storage = a*(N - b);
        result += storage;
        a ++;
        b ++;
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
console.log(generatorCube(100_000_000_000_000_000_000));
console.timeEnd('test');
