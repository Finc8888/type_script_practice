interface InterfaceTest {
    id:number,
    name?:string
}
let myInterface : InterfaceTest;
let myInterface2 : InterfaceTest;
myInterface = {
    id : 3,
    name : 'Jon'
};
console.log('myInterface =>',myInterface);
myInterface2 = {
    id : 4
};
myInterface2 = myInterface;
myInterface2.id =5;
console.log('myInterface =>',myInterface2);
// Слабые типы - инттерфейс все параметры которого - необязательны
interface IWeak {
    age?:number,
    name?:string

}
let weakType : IWeak;
weakType = {age:90};
console.log('weakType',weakType);

// let weakTypeError : IWeak;
// weakTypeError = {id:1};
// console.log('weakTypeError',weakTypeError);

// Вывод типов с помощью оператора in
interface ICar {
    model:string,
    year:Date
}
let bmw : ICar = {
    model:'BMW-X1',
    year : new Date()
};
function getValue(commonObject : InterfaceTest | ICar){
    if('name' in commonObject){
        console.log(`name of Object is ${commonObject.name}.His id is ${commonObject.id}.`);
    }
    if('model' in commonObject){
        console.log(`name of Object is ${commonObject.model}.His year is ${commonObject.year}.`);
    }
}
getValue(bmw);
getValue(myInterface2);


