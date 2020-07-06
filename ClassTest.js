"use strict";
// Классы
class Robot {
    setName(name) {
        this.name = name;
    }
    print() {
        console.log(`My name is ${this.name}`);
    }
    toStr() {
        console.log(`${JSON.stringify(this)}`);
    }
}
class Person {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    setName(name) {
        this.name = name;
    }
    print() {
        console.log(`My name is ${this.name}`);
    }
    toStr() {
        console.log(`${JSON.stringify(this)}`);
    }
}
// у класса Robot нету конструктора
let robot1 = new Robot();
// У класса Person,напротив - он имеется.
let person1 = new Person(4, "Patison");
robot1.setName("Bill");
function printInfo(obj) {
    obj.print();
    obj.toStr();
}
// robot1.print();
printInfo(robot1);
printInfo(person1);
class NDPoint {
    constructor(xOrPoint, y, z) {
        if (typeof xOrPoint === 'undefined' || xOrPoint === null) {
            this.values = [];
        }
        else if (xOrPoint instanceof Array) {
            this.values = xOrPoint;
        }
        else if (typeof xOrPoint === 'number') {
            if (typeof y !== 'undefined') {
                if (typeof z !== 'undefined') {
                    this.values = [xOrPoint, y, z];
                }
                else {
                    this.values = [xOrPoint, y];
                }
            }
            else {
                this.values = [xOrPoint];
            }
        }
        else {
            this.values = [...xOrPoint.coordinates()];
        }
    }
    coordinates() {
        return this.values;
    }
}
class ComplexType {
    constructor(idArg, nameArg) {
        this.id = idArg;
        this.name = nameArg;
    }
    print() {
        return "id:" + this.id + " name:" + this.name;
    }
    usingTheAnyKeyword(arg1) {
        this.id = arg1;
    }
    usingOptionalParameters(optionalArg1) {
        if (optionalArg1) {
            this.id = optionalArg1;
        }
    }
    usingDefaultParameters(defaultArg1 = 0) {
        this.id = defaultArg1;
    }
    usingRestSyntax(...argArray) {
        if (argArray.length > 0) {
            this.id = argArray[0];
        }
    }
    usingFunctionCallbacks(callback) {
        callback(this.id);
    }
}
class RobotTest {
    constructor(idArg, nameArg) {
        this.id = idArg;
        this.name = nameArg;
    }
    print() {
        console.log(`Id for this Robot is ${this.id} and name is ${this.name}`);
    }
    setAnyId(id) {
        this.id = id;
    }
    setOptinalId(id) {
        if (id) {
            this.id = id;
        }
    }
    setDefaultId(id = 88) {
        this.id = id;
    }
    setIdWithRestSyntax(...idArr) {
        this.id = idArr[0];
    }
    getNameWithCallback(callback) {
        callback(this.name);
    }
}
function getName(name) {
    console.log(`Name is ${name}`);
}
let robotT = new RobotTest(8, 'Valdo');
robotT.setAnyId('3');
robotT.setOptinalId();
robotT.print();
robotT.setOptinalId(4);
robotT.print();
robotT.setDefaultId();
robotT.print();
robotT.setDefaultId(44);
robotT.print();
robotT.setIdWithRestSyntax(1, 2, 3, 4);
robotT.print();
robotT.getNameWithCallback(getName);
// Возможно, но не рекомендуется использовать сокращенный синтаксис конструктора
// так же метод доступа readonly разрешает устанавливать значение свойства только в консрукторе
class TestAutoConstuctor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    set age(value) {
        this._age = value;
        console.log(`It is bad practic set value direct for instanse`);
    }
    get age() {
        console.log(`Age equals ${this._age}`);
        return this._age;
    }
}
let test1 = new TestAutoConstuctor(7, 'Bob');
test1.setId(9);
// name имеет доступ только для чтения
// test1.name = 'Bill';
getName(test1.name);
test1.age = 44;
test1.age;
// статические свойтва и методы
class TestStatic {
    constructor() {
        TestStatic.counter++;
    }
    static print() {
        console.log(`class named TestStatic was called ${TestStatic.counter} times`);
    }
}
TestStatic.counter = 0;
let obj1 = new TestStatic();
TestStatic.print();
let obj4 = new TestStatic();
TestStatic.print();
let obj5 = new TestStatic();
TestStatic.print();
let obj6 = new TestStatic();
TestStatic.print();
// пространства имен
// так же ключевое слово export разрешает использование класса за пределами namespace
var NSpase1;
(function (NSpase1) {
    class Robot1 {
        constructor(_name) {
            this._name = _name;
        }
        get name() {
            console.log(this._name);
            return this._name;
        }
    }
    class Robot2 {
        constructor(_name) {
            this._name = _name;
        }
        get name() {
            console.log(this._name);
            return this._name;
        }
    }
    NSpase1.Robot2 = Robot2;
})(NSpase1 || (NSpase1 = {}));
var NSpase2;
(function (NSpase2) {
    class Robot1 {
        constructor(_name) {
            this._name = _name;
        }
        get name() {
            console.log(this._name);
            return this._name;
        }
    }
    NSpase2.Robot1 = Robot1;
    class Robot2 {
        constructor(_name) {
            this._name = _name;
        }
        get name() {
            console.log(this._name);
            return this._name;
        }
    }
    NSpase2.Robot2 = Robot2;
})(NSpase2 || (NSpase2 = {}));
let cyborg1 = new NSpase1.Robot2('Bob1');
let cyborg2 = new NSpase2.Robot2('Bob2');
let cyborg3 = new NSpase2.Robot1('Bob3');
cyborg1.name;
cyborg2.name;
cyborg3.name;
