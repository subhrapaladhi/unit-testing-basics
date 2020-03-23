log = console.log
expect = require('chai').expect
should = require('chai').should()
_ = require('lodash')

let person = require('./index');

describe('#calculate income', ()=>{
    it('income cant be 0',()=>{
        let p = new person('subhra',20,4,1990);
        p.calculateIncome().should.not.equal(0);
    })
    
    it('income should not be negative', ()=>{
        let p = new person('subhra',20,5,1990); 
        let flag = p.calculateIncome()>=0;
        flag.should.be.true;
    })
})

describe('#calculate time in company', ()=>{

})