namespace DecoratorTest {
    function simpleDecorator(constructor: Function) {
        console.log('This class was called with decorator 1');
    }

    function simpleSecondDecorator(constructor: Function) {
        console.log('This class was called with decorator 2');
    }
    
    // для передачи параметров функции декоратору, создаются фабрики декораторов
    
    function fabricDecorator(parameter: string) {
        return function (constructor: Function) {
            console.log(`Use decorator named like ${parameter}`);
        };

    }
    // вывод конструктора
    function showConstructor(constructor: Function){
        console.log(`constructor: ${constructor}`);
        console.log(`constructor.name - ${(<any>constructor).name}`);
        constructor.prototype.testProperty = 'constructor_testProperty';
    }
    // декоратор свойств
    function propertyDecorator(target : any, propertyKey : string){
        console.log(`target : ${target}`);
        console.log(`target constructor : ${target.constructor}`);
        console.log(`target constructor name: ${target.constructor.name}`);
        console.log(`target propertyKey: ${propertyKey}`);
    }
    @fabricDecorator('main')
    @simpleDecorator
    @simpleSecondDecorator
    @showConstructor
    class SimpleClass {
        @propertyDecorator
        name:string;
        constructor() {
            this.name = '';
        }

    }
    class TestStaticProp {
        @propertyDecorator
        static nameTest:string;


    }
    // декоратор вызыватется только во время определения класса, а не создания экземпляра

    // Декораторы оцениваются в порядке их появления в коде, но затем вызы-
    // ваются в обратном порядке.
    let simpleClass1 = new SimpleClass;
    let simpleClass2 = new SimpleClass;
    console.log(`simpleClass11 - ${JSON.stringify(simpleClass1)}`);
    console.log(`simpleClass22 - ${JSON.stringify(simpleClass2)}`);
    console.log(`${(<any>simpleClass1).testProperty}`);
}