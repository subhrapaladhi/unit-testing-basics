const assert = require('chai').assert;
const employee = require('./index');

describe('employee class',()=>{
    it('check if employee exits', ()=>{
        let newEmployee = new employee('jon doe', 20, 4, 2019)
        assert.exists(newEmployee)
    })

    it('check if employee is of type object', ()=>{
        let newEmployee = new employee('jon doe', 20, 4, 2019);
        assert.typeOf(newEmployee,'object')
    })

    describe('calculate income', ()=>{
        it('income should not be 0', ()=>{
            let newEmployee = new employee('jon doe', 20, 4, 2019);
            assert.notEqual(newEmployee.calculateIncome(),0);
        })
        it('income should be less than 30000', ()=>{
            // considering that maximum age of a person can be 100
            let newEmployee = new employee('jon doe', 100, 2, 2019);
            assert.isAtMost(newEmployee.calculateIncome(),3000);
        })
    })

    describe('time in year at the company', ()=>{
        it('max time of an employee at company should be less than 50', ()=>{
            // considering the company was established in 1980
            let maxTime = new employee('jon doe', 100, 2, 1980).calculateTimeInCompany();
            assert.isAtMost(maxTime,50);
        })      
    })
})