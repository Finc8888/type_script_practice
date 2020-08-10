namespace generalizationTest{
    class Concatenator <T> {
        concatenatorArr(arr: Array<T>):string{
            let result = '';
            for(let value of arr){
                if(arr.indexOf(value) > 0){
                    result += ',';
                }
                result += String(value);
            }
            return result;
        }
    }
    class MyClass{
        private readonly _name: string;
        constructor(num:number) {
            this._name = `${num}MyClass`;
        }
        toString():string{
            return this._name;
        }
    }
    let myClassArr:MyClass[] =[
        new MyClass(1),
        new MyClass(2),
        new MyClass(3),
        new MyClass(4)
    ];
    let stringConcatenator = new Concatenator<string>();
    let numberConcatenator = new Concatenator<number>();
    let myClassConcatenator = new Concatenator<MyClass>();
    let stringArray: string[] = ["first", "second", "third"];
    let numberArray: number[] = [1, 2, 3];
    let stringResult = stringConcatenator.concatenatorArr(stringArray);
    let numberResult = numberConcatenator.concatenatorArr(numberArray);
    let myClassResult = myClassConcatenator.concatenatorArr(myClassArr);
    console.log(stringResult);
    console.log(numberResult);
    console.log(myClassResult);
}