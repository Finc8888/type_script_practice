let opt = (a:number,b:number,c:number)=>{
    return a * b + c;
};
console.log(`opt(1,2,3) is  ${opt(1,2,3)}`);
// Типизация с поддержкой выводов типов
let num= '5';
num = '6';
let num2: any = 5;
num2 = '6';

// Утиная типизация
let obj = {id:12,name:'Jack'};
obj = {id:12,name:'Bob'};
// enum
enum state {
    on,
    off,
    stateles
}
console.log(state.stateles);
// const enum
const enum state2 {
    on,
    off,
    stateles
}
console.log(state2.off);
//определенное присваивание
let globalStr!:string;
setVar('Hello');
console.log(`globalStr is ${globalStr!}`);
function setVar(value: string){
    globalStr = value;
}
//типы свойств с точечной нотацией
let obj2:any = {
    id:3,
    name:"Jack"
};
console.log(obj2['id']);
let obj3:any = {
    'id':33,
    'name':"Jack"
};
console.log(obj3['id']);
//числовые разделители
let oneMillion = 1_000_000;
console.log(`oneMillion is ${oneMillion}`);
let hex = 0x00_ff_00;
console.log(`hex is ${hex}`);
//функции необязательные параметры
let sumStr = (a:string,b:string,c?:string):string=>{
    return a + b + c;
};
console.log(`subStr(a,b)=> ${sumStr('a','b')}`);
//функции обратного вызова
let callback = (text:string):void=>{
    console.log(`Tex on out is ${text}`);
};
function funcWithCallback(str:string, callback:(text:string)=>void){
    console.log('I just print Hello');
    callback(str);
}
funcWithCallback('Hi',callback);

//переопределение функции
function  add(a:number,b:number):number;
//переопределение функции
function  add(a:string,b:string):number;
//переопределение функции
function  add(a:any,b:any):any{
    return a + b;
}
console.log(`result sum of 1 and 3 is ${add(1,3)}`);
console.log(`result sum of a and b is ${add('a','b')}`);

//объединеные типы для функции сложения не сработало(надо через if)
// function  add2(a:number | string,b:number | string):number | string{
//     return a + b;
// }
// console.log(`result sum of 1 and 3 is ${add2(1,3)}`);
// console.log(`result sum of a and b is ${add2('a','b')}`);

//Newer
function alwaysThrow() {// :never
    throw("Congratulation is the Error!");
    return -1;

}
// alwaysThrow();

enum Enum {
    FiRST,
    SECOND,
    // THIRD
}
function getEnum(value : Enum) :string{
    switch (value) {
        case Enum.FiRST:return "First case";
        case Enum.SECOND:return "Second case";
    }
    let returnValue :never = value;
}
console.log(`getEnum of First = ${Enum.FiRST} is ${getEnum(Enum.FiRST)}`);
//unknown type -Нельзя присвоить уже определенному типу в отличие от any
let variable: unknown = "String";
let anyVar: any = 12;
let numb: number= 7;
console.log(`Result of variable is ${variable}`);
variable = 2;
console.log(`Result of variable is ${variable}`);
// numb = variable;
numb = anyVar;
console.log(`Result of variable is ${numb}`);
console.log(`Result of variable is ${variable}`);
//spread
let object1 = {id:12};
let object2 = {name:"Lori"};
let object3 = {...object1,... object2};
console.log(`common obj is ${JSON.stringify(object3)}`);
// console.log(`common obj is ${object3}`);
// console.log(`common obj is ${[1,2,3]}`);
//кортежи
let tupleTest: [boolean,string];
[tupleTest] = [[true,'Hello']];
console.log(tupleTest);
let [t1,t2] = tupleTest;
console.log(`t1 is ${t1}, t2 is ${t2}`);
//необязательные элементы кортежа
let tupleTest2: [boolean,string?];
[tupleTest2] = [[true]];
console.log(tupleTest2);
let [t3] = tupleTest;
console.log(`t1 is ${t3}`);
//Кортежи и синтаксис оператора остатка
function foo(... arr:[string,number,boolean]):void {
    let [str,num,bool] = arr;
    console.log(`string is ${str},\nnumber is ${num},\nboolean is ${bool}\n`)
}
foo('Jon',8,false);
//второй способ применения
type spreadWithToople = [boolean,...string[]];
let list: spreadWithToople = [true,'q','w','e'];
console.log(`listWithSpread is ${list}`);
//bigInt
let moreNumb = Number.MAX_SAFE_INTEGER;//53 bit
console.log(`MAX_SAFE_INTEGER is ${moreNumb}`);
for(let i = 0; i < 10;i++){
    let limit = moreNumb + i;
    console.log(limit);
}
//Fix with bigInt(need ESNext in tsconfig.json and BigInt for i and n for bigint
let moreNumbFix: bigint = 9_007_199_254_740_991n;
console.log(`MAX_SAFE_INTEGER is ${moreNumbFix}`);
for(let i = 0; i < 10;i++){
    let limit = moreNumbFix + BigInt(i);
    console.log(limit);
}





