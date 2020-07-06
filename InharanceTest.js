"use strict";
console.log('Test');
var InharanceSpace;
(function (InharanceSpace) {
    class AbsttractCreation {
        sing(sing) {
            console.log(`&&&${sing}&&&`);
        }
    }
    class Display {
        counter(className, count) {
            console.log(`Class ${className} was calles ${count} times`);
            return count;
        }
        displayProperties(properties, obj) {
            let resultStr = '';
            for (let value of properties) {
                if (value == 'sex') {
                    resultStr += `${value}: ${obj.sex ? 'men' : 'woomen'},`;
                    continue;
                }
                else if (value == 'class') {
                    resultStr += `${value}: ${obj.constructor.name},`;
                    continue;
                }
                resultStr += `${value}: ${obj[value]}, `;
            }
            console.log(resultStr);
            return resultStr;
        }
    }
    InharanceSpace.Display = Display;
    class Person extends AbsttractCreation {
        constructor(name, age, sex) {
            super();
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.display = new Display();
            Person._counter++;
        }
        speak(sentence) {
            console.log(`""${sentence}""`);
        }
        get counter() {
            return this.display.counter(this.constructor.name, Person._counter);
        }
        getProperties() {
            return this.display.displayProperties(['class', 'name', 'age', 'sex'], this);
        }
    }
    Person._counter = 0;
    InharanceSpace.Person = Person;
    class Robot {
        constructor(model, year) {
            this.model = model;
            this.year = year;
            this.display = new Display();
            Robot._counter++;
        }
        get counter() {
            return this.display.counter(this.constructor.name, Robot._counter);
        }
    }
    Robot._counter = 0;
    InharanceSpace.Robot = Robot;
    class Cyborg extends Person {
        constructor(chipNumber, name, age, sex, model, year) {
            super(name, age, sex);
            this.chipNumber = chipNumber;
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.model = model;
            this.year = year;
            Cyborg._counter++;
        }
        get counter() {
            return this.display.counter(this.constructor.name, Cyborg._counter);
        }
        speak(sentence) {
            console.log(`0101010101010101010010101010`);
            super.speak(sentence);
            console.log(`0101010101010101010010101010`);
        }
        getProperties() {
            return `${super.getProperties()},${this.display.displayProperties(['model', 'year'], this)}`;
        }
    }
    Cyborg._counter = 0;
    InharanceSpace.Cyborg = Cyborg;
    let person1 = new InharanceSpace.Person('Amanda', 30, false);
    person1.counter;
    person1.getProperties();
    let person2 = new InharanceSpace.Person('Bob', 23, true);
    person2.counter;
    person2.getProperties();
    let person3 = new InharanceSpace.Person('Jon', 34, true);
    person3.counter;
    person3.speak('Бла-бла-бла');
    person3.getProperties();
    let robot1 = new InharanceSpace.Robot('Netflix', new Date());
    robot1.counter;
    let robot2 = new InharanceSpace.Robot('Microsoft', new Date());
    robot2.counter;
    let robot3 = new InharanceSpace.Robot('Sony', new Date());
    robot3.counter;
    let cyborg1 = new InharanceSpace.Cyborg(12341, 'Tom', 3, true, 'SonyT', new Date());
    cyborg1.counter;
    cyborg1.getProperties();
    let cyborg2 = new InharanceSpace.Cyborg(12342, 'Samanta-Teresa', 10, false, 'Sony', new Date());
    cyborg2.counter;
    cyborg2.getProperties();
    let cyborg3 = new InharanceSpace.Cyborg(12343, 'Jonnyy', 4, true, 'Sony', new Date());
    cyborg3.counter;
    cyborg3.getProperties();
    cyborg3.speak('Бла-бла-бла');
    cyborg3.sing('Калинка-малинка single');
})(InharanceSpace || (InharanceSpace = {}));
