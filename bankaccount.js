class BankAccount {
    constructor(intRate, balance = 0) {
    // attributes
        this.intRate = intRate;
        this.balance = balance;
    }
    // methods
    deposit(amount) {
        this.balance += amount
        return this;
    }
    withdraw(amount) {
	    if (this.balance >= amount) {
            this.balance -= amount
        }
        else {
            console.log("Insufficient funds: Charging a $5 fee.")
            this.balance -= 5
        }
        return this;
    }
    displayAccountInfo() {
	    console.log(`Balance: $${this.balance}`)
        return this;
    }
    yieldInterest() {
        if (this.balance > 0) {
            this.balance += this.balance*this.intRate
        }
        return this;
    }
}

const accountOne = new BankAccount(.05)

const accountTwo = new BankAccount(.01)

console.log(accountOne.deposit(100).deposit(150).deposit(50).yieldInterest().displayAccountInfo());

console.log(accountTwo.deposit(4000).deposit(1800).withdraw(1200).withdraw(1400).yieldInterest().displayAccountInfo());