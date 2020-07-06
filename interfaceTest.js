"use strict";
let myInterface;
let myInterface2;
myInterface = {
    id: 3,
    name: 'Jon'
};
console.log('myInterface =>', myInterface);
myInterface2 = {
    id: 4
};
myInterface2 = myInterface;
myInterface2.id = 5;
console.log('myInterface =>', myInterface2);
let weakType;
weakType = { age: 90 };
console.log('weakType', weakType);
let bmw = {
    model: 'BMW-X1',
    year: new Date()
};
function getValue(commonObject) {
    if ('name' in commonObject) {
        console.log(`name of Object is ${commonObject.name}.His id is ${commonObject.id}.`);
    }
    if ('model' in commonObject) {
        console.log(`name of Object is ${commonObject.model}.His year is ${commonObject.year}.`);
    }
}
getValue(bmw);
getValue(myInterface2);
