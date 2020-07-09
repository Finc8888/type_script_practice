// 1- книжный вариант создания класса на основе замыкания
let BaseClassWithConstructor2 = (function () {
    function BaseClassWithConstructor(_id) {
        this.id = _id;
    }
    return BaseClassWithConstructor;
})();

let obj = new BaseClassWithConstructor2(3);
console.log('obj.id',obj.id);

// 2- мой вариант создания класса на основе замыкания
function MyClass(){
    function construct(_id,_name) {
        this.id = _id;
        this.name = _name;
        this.display = function () {
            console.log(`name: ${this.name}, id: ${this.id}`);
        };
    }
    return construct;
}

let SimlyClass = MyClass();
let obj2 = new SimlyClass(12, 'Bill');
obj2.display();