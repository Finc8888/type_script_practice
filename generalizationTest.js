"use strict";
let generalizationTest;
(function (generalizationTest) {
    class Concatenator {
        concatenatorArr(arr) {
            let result = '';
            for (let value of arr) {
                if (arr.indexOf(value) > 0) {
                    result += ',';
                }
                result += String(value);
            }
            return result;
        }
    }
    class MyClass {
        constructor(num) {
            this._name = `${num}MyClass`;
        }
        toString() {
            return this._name;
        }
    }
    let myClassArr = [
        new MyClass(1),
        new MyClass(2),
        new MyClass(3),
        new MyClass(4)
    ];
    let stringConcatenator = new Concatenator();
    let numberConcatenator = new Concatenator();
    let myClassConcatenator = new Concatenator();
    let stringArray = ["first", "second", "third"];
    let numberArray = [1, 2, 3];
    let stringResult = stringConcatenator.concatenatorArr(stringArray);
    let numberResult = numberConcatenator.concatenatorArr(numberArray);
    let myClassResult = myClassConcatenator.concatenatorArr(myClassArr);
    console.log(stringResult);
    console.log(numberResult);
    console.log(myClassResult);
})(generalizationTest || (generalizationTest = {}));
