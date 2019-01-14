class Compensation {

    constructor(stocks, stockVestDuration, stockVestPercentPerYear, stockValue) {
        this.stocks = stocks;
        this.stockVestDuration = stockVestDuration;
        this.stockVestPercentPerYear = stockVestPercentPerYear;
        this.stockValue = stockValue;
    }

    set Joining(year) {
        this._joiningYear = year;
    }

    set BaseSalary(salary) {
        this.base = salary;
    }

    set BonusPerYear(bonus) {
        this.bonus = bonus;
    }

    set IncrementPerYear(increment) {
        this.increment = increment / 100;
    }

    TotalCompensation(year) {
        let years= year - this._joiningYear;
        let stockValue = years <= 3 ? ((this.stockVestPercentPerYear / 100) * this.stocks * 10):0;
        //console.log('stockValue', stockValue)
        //A = Principal * (1 + increment / n) pow (nt)
        //n is 1
        //so the calculation will be
        let newBaseSalary = this.base * Math.pow((1 + this.increment), years)

        newBaseSalary = Math.round(newBaseSalary)
        //console.log('newBaseSalary', newBaseSalary)

        let fixed = this.bonus + stockValue;
        //console.log('fixed', fixed)
        return newBaseSalary + fixed;
    }
}

let comp = new Compensation(1000, 3, 33.33, 10);

comp.Joining = 1984

comp.BaseSalary = 100000;

comp.BonusPerYear = 10000;

comp.IncrementPerYear = 10;

console.log('1984', comp.TotalCompensation(1984)) 

console.log('1985', comp.TotalCompensation(1985))

console.log('1986', comp.TotalCompensation(1986))

console.log('1987', comp.TotalCompensation(1987))

console.log('2024', comp.TotalCompensation(2024))