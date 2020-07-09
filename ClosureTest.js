"use strict";
var ClosureTest;
(function (ClosureTest_1) {
    function ClosureTest(num) {
        let _counter = num;
        function innerFunc() {
            console.log(_counter);
        }
        return innerFunc;
    }
    let closure = ClosureTest(12);
    closure();
})(ClosureTest || (ClosureTest = {}));
// Реализация класса с конструктором
//     const ClassWithConstructor = (function () {
//         const ClassWithConstructor = (_id) => {
//             this.id = _id;
//         }
//
//         return ClassWithConstructor;
//     })();
//
//     let obj = new ClassWithConstructor(44);
