"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DecoratorTest;
(function (DecoratorTest) {
    function simpleDecorator(constructor) {
        console.log('This class was called with decorator 1');
    }
    function simpleSecondDecorator(constructor) {
        console.log('This class was called with decorator 2');
    }
    // для передачи параметров функции декоратору, создаются фабрики декораторов
    function fabricDecorator(parameter) {
        return function (constructor) {
            console.log(`Use decorator named like ${parameter}`);
        };
    }
    // вывод конструктора
    function showConstructor(constructor) {
        console.log(`constructor: ${constructor}`);
        console.log(`constructor.name - ${constructor.name}`);
        constructor.prototype.testProperty = 'constructor_testProperty';
    }
    // декоратор свойств
    function propertyDecorator(target, propertyKey) {
        console.log(`target : ${target}`);
        console.log(`target constructor : ${target.constructor}`);
        console.log(`target constructor name: ${target.constructor.name}`);
        console.log(`target propertyKey: ${propertyKey}`);
    }
    let SimpleClass = class SimpleClass {
        constructor() {
            this.name = '';
        }
    };
    __decorate([
        propertyDecorator,
        __metadata("design:type", String)
    ], SimpleClass.prototype, "name", void 0);
    SimpleClass = __decorate([
        fabricDecorator('main'),
        simpleDecorator,
        simpleSecondDecorator,
        showConstructor,
        __metadata("design:paramtypes", [])
    ], SimpleClass);
    class TestStaticProp {
    }
    __decorate([
        propertyDecorator,
        __metadata("design:type", String)
    ], TestStaticProp, "nameTest", void 0);
    // декоратор вызыватется только во время определения класса, а не создания экземпляра
    // Декораторы оцениваются в порядке их появления в коде, но затем вызы-
    // ваются в обратном порядке.
    let simpleClass1 = new SimpleClass;
    let simpleClass2 = new SimpleClass;
    console.log(`simpleClass11 - ${JSON.stringify(simpleClass1)}`);
    console.log(`simpleClass22 - ${JSON.stringify(simpleClass2)}`);
    console.log(`${simpleClass1.testProperty}`);
})(DecoratorTest || (DecoratorTest = {}));
