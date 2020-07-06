System.register([], function (exports_1, context_1) {
    "use strict";
    let list1, list1_2, list2, list2_2, list3, list3_2, list4, list4_2;
    const __moduleName = context_1 && context_1.id;
    function timeExec(fun, arr, border) {
        if (border === void 0) { border = false; }
        console.time('test');
        fun(arr);
        console.timeEnd('test');
        console.log("Obj " + arr + " before transform. Result is " + fun(arr));
        if (border) {
            console.log('#########################################################');
        }
    }
    /*
     * алгоритм проверяет наличие дубликатов в массиве,
     * не самая оптимальная реализация со сложностью O(N^2)
     */
    function existDuplicate(arr) {
        for (let i = 0, len = arr.length; i < len; i++) {
            for (let j = 0, len_1 = arr.length; j < len_1; j++) {
                if (i != j) {
                    if (arr[i] == arr[j]) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    /*
     * алгоритм проверяет наличие дубликатов в массиве,
     * улучшенная версия со сложностью O((N^2-N)/2)=O(N^2)
     */
    function existDuplicate_v2(arr) {
        for (let i = 0, len = arr.length - 1; i < len; i++) {
            for (let j = i + 1, len_2 = arr.length; j < len_2; j++) {
                if (arr[i] == arr[j]) {
                    return true;
                }
            }
        }
        return false;
    }
    return {
        setters: [],
        execute: function () {
            //test
            list1 = [1, 2, 3, 4];
            timeExec(existDuplicate, list1);
            list1_2 = [1, 2, 3, 4];
            timeExec(existDuplicate_v2, list1_2, true);
            list2 = [1, 2, 3, 2];
            timeExec(existDuplicate, list2);
            list2_2 = [1, 2, 3, 2];
            timeExec(existDuplicate_v2, list2_2, true);
            list3 = ['a', 'b', 'c', 'd'];
            timeExec(existDuplicate, list3);
            list3_2 = ['a', 'b', 'c', 'd'];
            timeExec(existDuplicate_v2, list3_2, true);
            list4 = ['a', 'b', 'c', 'b'];
            timeExec(existDuplicate, list4);
            list4_2 = ['a', 'b', 'c', 'b'];
            timeExec(existDuplicate_v2, list4_2, true);
            exports_1("default", timeExec);
        }
    };
});
