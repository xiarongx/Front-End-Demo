//_ = require('lodash')
alwaysTrue = ()=> true
legitString = (someInput) => lodash.isString(someInput) && someInput.length > 0

// expose person for testing purpose
getPerson = ()=> person;
/*
module.exports = 
{
    alwaysTrue,
    legitString,
    getPerson
}
*/
// handling other people's code
class Person{
    constructor(name, age, department, job){
        this.name = name;
        this.age = age;
        this.department = department;
        this.job = job;
        this.baseSalary = 3000;
        this.calculateBonus();
        //this.totalBonus = 0
        this.totalSalary = 0;
        this.calculateTotalSalary();
    }

    calculateBonus(){
        this.totalBonus = this.department.departmentBonus + this.job.jobBonus;
    }

    calculateTotalSalary(){
        this.totalSalary = this.baseSalary + this.totalBonus;
    }
}

class Department{
    constructor(name, departmentBonus){
        this.name = name;
        this.departmentBonus = departmentBonus;
    }
}

class Job{
    constructor(name, jobBonus){
        this.name = name;
        this.jobBonus = jobBonus;
    }
}

var person;

function enrollPerson(){
    var research = new Department("Reseach", 2000);
    var jrResearcher = new Job("Junior Reseacher", 3000);
    person = new Person('Victor Frankenstein', 30, research, jrResearcher)
}

enrollPerson();


