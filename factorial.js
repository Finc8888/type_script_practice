System.register(["./existDuplicate"], function (exports_1, context_1) {
    "use strict";
    let existDuplicate_1;
    const __moduleName = context_1 && context_1.id;
    /*
     *Вычисление факториала
     */
    function factorial(N) {
        let counter = 1;
        let res = 1;
        while (counter < N) {
            const nextNum = counter++;
            res = counter * nextNum;
            counter++;
        }
        return res;
    }
    return {
        setters: [
            function (existDuplicate_1_1) {
                existDuplicate_1 = existDuplicate_1_1;
            }
        ],
        execute: function () {
            // test
            existDuplicate_1["default"](factorial, 5, true);
            existDuplicate_1["default"](factorial, 10, true);
        }
    };
});
