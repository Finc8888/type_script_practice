namespace patternFactoryTest{
    enum PersonCategory{
        Infant,
        Child,
        Adult,
        Undefinded
    }
    interface IPerson {
        Category: PersonCategory;
        canSignContracts(): boolean;
        printDetailInfo(): void;
    }
    abstract class Person implements IPerson{
        Category: PersonCategory;
        private DateOfBirthday: Date;
        protected constructor(DateOfBirthday: Date) {
            this.DateOfBirthday = DateOfBirthday;
            this.Category = PersonCategory.Undefinded;
        }
        abstract canSignContracts():boolean;
        printDetailInfo(){
            let detailInfo = `
                Detail Info for Person:
                Date of Birthday: ${this.DateOfBirthday.toDateString()}
                Category: ${PersonCategory[this.Category]}
                Person can sing of Contrancts: ${this.canSignContracts()} 
            `;
            console.info(detailInfo);
        }
    }
    class Infant extends Person{
        constructor(dateOfBirthday: Date) {
            super(dateOfBirthday);
            this.Category = PersonCategory.Infant;
        }
        canSignContracts(): boolean {
            return false;
        }

    }
    class Child extends Person{
        constructor(dateOfBirthday: Date){
            super(dateOfBirthday);
            this.Category = PersonCategory.Child;
        }
        canSignContracts(): boolean {
            return false;
        }
    }
    class Adult extends Person{
        constructor(dateOfBirthday: Date) {
            super(dateOfBirthday);
            this.Category = PersonCategory.Adult;
        }
        canSignContracts(): boolean {
            return true;
        }
    }
    class PersonFactory{
        getPerson(dateOfBirthday: Date):IPerson{
            let currentDate = new Date();
            let currentMonth = currentDate.getMonth() + 2;
            let currentDay = currentDate.getDay();
            let dateTwoYearsAgo = new Date(currentDate.getFullYear() - 2,currentMonth,currentDay);
            let date18YearsAgo = new Date(currentDate.getFullYear() - 18,currentMonth,currentDay);
            if(dateOfBirthday >= dateTwoYearsAgo){
                return new Infant(dateOfBirthday);
            }
            else if(dateOfBirthday >= date18YearsAgo){
                return new Child(dateOfBirthday);
            }
            return new Adult(dateOfBirthday);
        }
    }
    let factory = new PersonFactory();
    let person1 = factory.getPerson(new Date(2019, 0, 20));
    person1.printDetailInfo();

    let person2 = factory.getPerson(new Date(2010, 0, 20));
    person2.printDetailInfo();

    let person3 = factory.getPerson(new Date(1988, 0, 20));
    person3.printDetailInfo();
}
