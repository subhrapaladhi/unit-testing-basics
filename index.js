class employee{
    constructor(name,age,deptNo,startyear){
        this.name = name;
        this.age = age;
        this.deptNo = deptNo;
        this.startyear = startyear;
    }

    calculateIncome(){
        let income = this.age*(this.deptNo%3);
        return income
    }
    calculateTimeInCompany(){
        let diff = new Date().getFullYear() - this.startyear;
        return diff;
    }
}

module.exports = employee