"use strict";
/*
* Генерация неповторяющихся комбинаций из 2х букв
* переданной строки
*/
function genLetterComb(str) {
    let symbolArr = str.split('');
    for (let i = 0, len = symbolArr.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let combination = `${symbolArr[i]}${symbolArr[j]}`;
            console.log(combination);
        }
    }
}
// TODO Если будет повторение то необходим один раз вывести пару, но без дальнейшего сочетания
genLetterComb('ABCD');
