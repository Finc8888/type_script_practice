/*
* Сумма N первых членов арифметической прогрессии
*
*/
function APsum(N: number,first = 1):number {
    return ((first + N)/2) * N;
}

// test
console.log(APsum(1));
console.log(APsum(5));
console.log(APsum(10));
console.log(APsum(100));
console.log(APsum(10000000000000000));
