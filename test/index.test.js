log = console.log
/*
expect = require('chai').expect
should = require('chai').should()


// es6 deconstruction syntax
const{
    alwaysTrue,
    legitString
} = require('../src/index')
*/

describe('#mocha basics',()=>{
    //unit test are here
    it('true should be true',()=>{
        true.should.be.true;
    });
    it('I expect true to be true',()=>{
        expect(true).to.be.true;
    })
});

describe('#alwaysTrue', ()=>{
    it('should always return true', ()=>{
        alwaysTrue().should.be.true;
    });
    it('I expect it always be true',()=>{
        expect(alwaysTrue()).to.be.true;
    });
    it('should not be false', ()=>{
        alwaysTrue().should.not.be.false;
    });
});

// ------------------------------------------------------------------------------------------------------
// testing other people's code

var expectedBaseSalary = 3000;
var expectedDepartmentBonus = 2000;
var expectedJobBonus = 3000;
var expectedTotalBonus = 5000;
var expectedTotalSalary = expectedBaseSalary + expectedDepartmentBonus + expectedJobBonus;

describe("#index initial conditions", ()=>{
    
    it('total salary should equal expected total salary', ()=>{
        const person = getPerson();
        person.totalSalary.should.equal(expectedTotalSalary);
    });

    it('department bonus should equal expected department bonus', ()=>{
        const person = getPerson();
        person.department.departmentBonus.should.equal(expectedDepartmentBonus);
    });

    it('job bonus should equal expected job bonus', ()=>{
        const person = getPerson();
        person.job.jobBonus.should.equal(expectedJobBonus);
    });

    it('total bonus should equal expected toal bonus', ()=>{
        const person = getPerson();
        person.totalBonus.should.equal(expectedTotalBonus);
    });
});