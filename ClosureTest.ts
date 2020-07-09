namespace ClosureTest {
    function ClosureTest(num: number) {
        let _counter = num;

        function innerFunc() {
            console.log(_counter);
        }

        return innerFunc;
    }

    let closure = ClosureTest(12);
    closure();
}
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
