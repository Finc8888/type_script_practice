
namespace InharanceSpace{
    interface IPerson {
        name: string;
        sex: boolean;
        age: number;
    }
    interface IRobot {
        model: string;
        year : Date;
    }
    interface ICyborg extends IPerson,IRobot{
        chipNumber: number;

    }
    abstract class AbsttractCreation {
        
    }
    export class Display{
        counter(className :string,count :number): number{
            console.log(`Class ${className} was calles ${count} times`);
            return <number>count;
        }
        displayProperties(properties: any[],obj: any){
            let resultStr = '';
            for(let value of properties){
                if(value == 'sex'){
                    resultStr += `${value}: ${obj.sex ? 'men':'woomen'},`;
                    continue;
                }
                else if(value == 'class'){
                    resultStr += `${value}: ${obj.constructor.name},`;
                    continue;
                }
                resultStr += `${value}: ${obj[value]}, `;
            }
            console.log(resultStr);
            return <string>resultStr;
        }
    }
   export class Person implements IPerson{
        static _counter = 0;
        protected display = new Display();
        constructor(readonly name: string,readonly age:number,readonly sex:boolean) {
            Person._counter++;
        }
       get counter(){
           return this.display.counter(this.constructor.name, Person._counter);
       }
       getProperties(){
            return this.display.displayProperties(['class','name','age','sex'], this);
       }

   }
    export class Robot implements IRobot{
        private display = new Display();
        static _counter = 0;
        constructor(readonly model: string,readonly year: Date) {
            Robot._counter++;
        }
        get counter(){
            return this.display.counter(this.constructor.name, Robot._counter);
        }

    }
    export class Cyborg extends Person implements ICyborg {
        static _counter: number = 0;
        constructor(
            readonly chipNumber: number,
            readonly name: string,
            readonly age:number,
            readonly sex:boolean,
            readonly model: string,
            readonly year: Date) {
            super(name,age,sex);
            Cyborg._counter++;
        }
        get counter(){
            return this.display.counter(this.constructor.name, Cyborg._counter);
        }
        getProperties(){
            return `${super.getProperties()},${this.display.displayProperties(['model','year'],this)}`;
        }


    }
    let person1 = new InharanceSpace.Person('Amanda',30,false);
    person1.counter;
    person1.getProperties();
    let person2 = new InharanceSpace.Person('Bob',23,true);
    person2.counter;
    person2.getProperties();
    let person3 = new InharanceSpace.Person('Jon',34,true);
    person3.counter;
    person3.getProperties();

    let robot1 = new InharanceSpace.Robot('Netflix', new Date());
    robot1.counter;
    let robot2 = new InharanceSpace.Robot('Microsoft', new Date());
    robot2.counter;
    let robot3 = new InharanceSpace.Robot('Sony', new Date());
    robot3.counter;

    let cyborg1 = new InharanceSpace.Cyborg(1234_1,'Tom',3,true, 'SonyT', new Date());
    cyborg1.counter;
    cyborg1.getProperties();
    let cyborg2 = new InharanceSpace.Cyborg(1234_2,'Samanta',10,false, 'Sony', new Date());
    cyborg2.counter;
    cyborg2.getProperties();
    let cyborg3 = new InharanceSpace.Cyborg(1234_3,'Jonny',4,true, 'Sony', new Date());
    cyborg3.counter;
    cyborg3.getProperties();
}

