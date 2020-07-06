// Классы
class Robot {
  id: number | undefined;
  model: string | undefined;
  name: string | undefined;
  setName(name: string): void {
    this.name = name;
  }
  print(): void {
    console.log(`My name is ${this.name}`);
  }
  toStr(): void {
    console.log(`${JSON.stringify(this)}`);
  }
}
class Person {
  constructor(_id: number, _name: string) {
    this.id = _id;
    this.name = _name;
  }
  id: number | undefined;
  secondName: string | undefined;
  name: string | undefined;
  setName(name: string): void {
    this.name = name;
  }
  print(): void {
    console.log(`My name is ${this.name}`);
  }
  toStr(): void {
    console.log(`${JSON.stringify(this)}`);
  }
}
// Взаимодействие интерфейсов и классов
interface IDisplay {
  name: string | undefined;
  print(): void;
  toStr(): void;
}
// у класса Robot нету конструктора
let robot1 = new Robot();
// У класса Person,напротив - он имеется.
let person1 = new Person(4, "Patison");

robot1.setName("Bill");

function printInfo(obj: IDisplay): void {
  obj.print();
  obj.toStr();
}

// robot1.print();

printInfo(robot1);
printInfo(person1);

// функции класса -- пример взят с ресурса
// https://www.broculos.net/2017/10/typescript-constructor-overloads.html
interface Point {
  coordinates(): Iterable<number>;
}
class NDPoint implements Point {
  private values: number[];

  constructor()
  constructor(point: Point)
  constructor(x: number)
  constructor(x: number, y: number)
  constructor(x: number, y: number, z: number)
  constructor(...coordinates: number[])
  constructor(coordinates: number[])
  constructor(xOrPoint?: Point | number | number[], y?: number, z?: number) {
    if (typeof xOrPoint === 'undefined' || xOrPoint === null) {
      this.values = [];
    } else if (xOrPoint instanceof Array) {
      this.values = xOrPoint;
    } else if (typeof xOrPoint === 'number') {
      if (typeof y !== 'undefined') {
        if (typeof z !== 'undefined') {
          this.values = [xOrPoint, y, z];
        } else {
          this.values = [xOrPoint, y];
        }
      } else {
        this.values = [xOrPoint];
      }
    } else {
      this.values = [...xOrPoint.coordinates()];
    }
  }
  coordinates(): Iterable<number> {
    return this.values;
  }
}

// функции класса -- пример взят с книги про TypeScript
interface IComplexType {
  id : number;
  name : string;
}
class ComplexType implements IComplexType {
  id: number;
  name: string;
  constructor(idArg: number, nameArg: string);
  constructor(idArg: string, nameArg: string);
  constructor(idArg: any, nameArg: any) {
    this.id = idArg;
    this.name = nameArg;
  }
  print(): string {
    return "id:" + this.id + " name:" + this.name;
  }
  usingTheAnyKeyword(arg1: any): any {
    this.id = arg1;
  }
  usingOptionalParameters(optionalArg1?: number) {
    if (optionalArg1) {
      this.id = optionalArg1;
    }
  }
  usingDefaultParameters(defaultArg1: number = 0) {
    this.id = defaultArg1;
  }
  usingRestSyntax(...argArray: number []) {
    if (argArray.length > 0) {
      this.id = argArray[0];
    }
  }
  usingFunctionCallbacks( callback: (id: number) => string ) {
    callback(this.id);
  }

}

interface IRobot {
  // id: number;
  // name: string;
  setOptinalId: (id?: number) =>void;
  setDefaultId:(id?: number) =>void;
  setIdWithRestSyntax:(...idArr: number[])=>void;
  getNameWithCallback:(callback: (name: string)=>void)=>void;
}
class RobotTest implements IRobot{
  private id: number;
  private name: string;
  constructor(idArg: number, nameArg: string)
  constructor(idArg: string, nameArg: string)
  constructor(idArg: any, nameArg: any) {
    this.id = idArg;
    this.name = nameArg;
  }
  print(){
    console.log(`Id for this Robot is ${this.id} and name is ${this.name}`);
  }
  setAnyId(id: any){
    this.id = id;
  }
  setOptinalId(id?: number) {
    if (id) {
      this.id = id;
    }
  }
  setDefaultId(id = 88){
      this.id = id;
    }
  setIdWithRestSyntax(...idArr: number[]){
    this.id = idArr[0];
  }
  getNameWithCallback(callback: (name: string)=>void){
    callback(this.name);
  }

}
function getName(name: string):void{
  console.log(`Name is ${name}`);
}
let robotT = new RobotTest(8,'Valdo');
robotT.setAnyId('3');

robotT.setOptinalId();
robotT.print();

robotT.setOptinalId(4);
robotT.print();

robotT.setDefaultId();
robotT.print();

robotT.setDefaultId(44);
robotT.print();

robotT.setIdWithRestSyntax(1,2,3,4);
robotT.print();

robotT.getNameWithCallback(getName);

// Возможно, но не рекомендуется использовать сокращенный синтаксис конструктора
// так же метод доступа readonly разрешает устанавливать значение свойства только в консрукторе
class TestAutoConstuctor {
  _age: number | undefined;
  constructor(public id: number, readonly name: string) {
  }
  setId(id: number){
    this.id = id;
  }
  set age(value:number){
    this._age = value;
    console.log(`It is bad practic set value direct for instanse`);
  }
  get age(){
    console.log(`Age equals ${this._age}`);
    return <number>  this._age;
  }
  // будет ошибка если раскоментировать метод setName
  // setName(name: string){
  //   this.name = name;
  // }
}

let test1 = new TestAutoConstuctor(7,'Bob');
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
  static counter = 0;
  static print(){
    console.log(`class named TestStatic was called ${TestStatic.counter} times`)
  }

}
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
namespace NSpase1{
  class Robot1{
    constructor(public _name: string) {
    }
    get name(){
      console.log(this._name);
      return this._name;
    }
  }
  export class Robot2{
    constructor(public _name: string) {
    }
    get name(){
      console.log(this._name);
      return this._name;
    }
  }
}

namespace NSpase2{
  export class Robot1{
    constructor(public _name: string) {
    }
    get name(){
      console.log(this._name);
      return this._name;
    }
  }
  export class Robot2{
    constructor(public _name: string) {
    }
    get name(){
      console.log(this._name);
      return this._name;
    }
  }
}
let cyborg1 = new NSpase1.Robot2('Bob1');
let cyborg2 = new NSpase2.Robot2('Bob2');
let cyborg3 = new NSpase2.Robot1('Bob3');
cyborg1.name;
cyborg2.name;
cyborg3.name;
