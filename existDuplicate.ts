type arrStringorNum =  any;
type boolorUndefined =  any;
function timeExec(fun:(arr:arrStringorNum)=>boolorUndefined,arr:arrStringorNum,border=false) {
    console.time('test');
    fun(arr);
    console.timeEnd('test');
    console.log(`Obj ${arr} before transform. Result is ${fun(arr)}`);
    if(border) {
        console.log('#########################################################');
    }
}
/*
 * алгоритм проверяет наличие дубликатов в массиве,
 * не самая оптимальная реализация со сложностью O(N^2)
 */
function existDuplicate(arr: arrStringorNum):boolorUndefined {
    for(let i=0,len = arr.length;i < len;i++){
        for(let j=0,len = arr.length;j < len;j++){
            if(i != j){
                if(arr[i] == arr[j]){
                    return true
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
function existDuplicate_v2(arr: arrStringorNum):boolorUndefined {
    for(let i=0,len = arr.length - 1;i < len;i++){
        for(let j=i+1,len = arr.length;j < len;j++){
                if(arr[i] == arr[j]){
                    return true
                }
        }
    }
    return false;
}
//test
let list1 = [1,2,3,4];
timeExec(existDuplicate,list1);
let list1_2 = [1,2,3,4];
timeExec(existDuplicate_v2,list1_2,true);

let list2 = [1,2,3,2];
timeExec(existDuplicate,list2);
let list2_2 = [1,2,3,2];
timeExec(existDuplicate_v2,list2_2,true);

let list3 = ['a','b','c','d'];
timeExec(existDuplicate,list3);
let list3_2 = ['a','b','c','d'];
timeExec(existDuplicate_v2,list3_2,true);

let list4 = ['a','b','c','b'];
timeExec(existDuplicate,list4);
let list4_2 = ['a','b','c','b'];
timeExec(existDuplicate_v2,list4_2,true);

// export default timeExec;


