"use strict";
var patternFactoryTest;
(function (patternFactoryTest) {
    let PersonCategory;
    (function (PersonCategory) {
        PersonCategory[PersonCategory["Infant"] = 0] = "Infant";
        PersonCategory[PersonCategory["Child"] = 1] = "Child";
        PersonCategory[PersonCategory["Adult"] = 2] = "Adult";
        PersonCategory[PersonCategory["Undefinded"] = 3] = "Undefinded";
    })(PersonCategory || (PersonCategory = {}));
    class Person {
        constructor(DateOfBirthday) {
            this.DateOfBirthday = DateOfBirthday;
            this.Category = PersonCategory.Undefinded;
        }
        printDetailInfo() {
            let detailInfo = `
                Detail Info for Person:
                Date of Birthday: ${this.DateOfBirthday.toDateString()}
                Category: ${PersonCategory[this.Category]}
                Person can sing of Contrancts: ${this.canSignContracts()} 
            `;
            console.info(detailInfo);
        }
    }
    class Infant extends Person {
        constructor(dateOfBirthday) {
            super(dateOfBirthday);
            this.Category = PersonCategory.Infant;
        }
        canSignContracts() {
            return false;
        }
    }
    class Child extends Person {
        constructor(dateOfBirthday) {
            super(dateOfBirthday);
            this.Category = PersonCategory.Child;
        }
        canSignContracts() {
            return false;
        }
    }
    class Adult extends Person {
        constructor(dateOfBirthday) {
            super(dateOfBirthday);
            this.Category = PersonCategory.Adult;
        }
        canSignContracts() {
            return true;
        }
    }
    class PersonFactory {
        getPerson(dateOfBirthday) {
            let currentDate = new Date();
            let currentMonth = currentDate.getMonth() + 1;
            let currentDay = currentDate.getDay();
            let dateTwoYearsAgo = new Date(currentDate.getFullYear() - 2, currentMonth, currentDay);
            let date18YearsAgo = new Date(currentDate.getFullYear() - 18, currentMonth, currentDay);
            if (dateOfBirthday >= dateTwoYearsAgo) {
                return new Infant(dateOfBirthday);
            }
            else if (dateOfBirthday >= date18YearsAgo) {
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
})(patternFactoryTest || (patternFactoryTest = {}));
