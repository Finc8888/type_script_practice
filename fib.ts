/*
* Рекурсиваная реализация генерация чисел Фибоначи
*
* N - кол-во выводимых чисел Фибоначи
*/
function fib(N : number):any  {

    if (N == 1 || N ==0) return 1;
    let res = fib(N - 1) + fib(N - 2);
    return res;
}
console.log(fib(4));

