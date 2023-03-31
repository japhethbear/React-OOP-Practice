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

class User {
    constructor(name, email) {
        // attributes
        this.name = name;
        this.email = email;
        this.accounts = [];
    }

    addAccount(intRate, balance = 0) {
        const newAccount = new BankAccount(intRate, balance);
        this.accounts.push(newAccount); // Add the new account to the array
        return this;
    }

    getAccount(index) {
        return this.accounts[index]; // Return the bank account at the specified index
    }


    makeDeposit(amount, accountIndex = 0) {
        const account = this.getAccount(accountIndex);
        account.deposit(amount);
        return this;
    }

    makeWithdraw(amount, accountIndex = 0) {
        const account = this.getAccount(accountIndex);
        account.withdraw(amount);
        return this;
    }

    displayUserBalance(accountIndex = 0) {
        const account = this.getAccount(accountIndex);
        account.displayAccountInfo();
        return this;
    }

    transferMoney(otherUser, amount, accountIndex = 0) {
        const account = this.getAccount(accountIndex);
        account.withdraw(amount);
        otherUser.makeDeposit(amount);
        return this;
    }
}

const Michael = new User("Michael", "mj@yahoo.com");

const Jay = new User("Jay", "jay@yahoo.com")

const Huey = new User("Huey", "hj@yahoo.com")

const accountOne = new BankAccount(.05)

const accountTwo = new BankAccount(.01)

Michael.addAccount(0.02, 1000);
Michael.addAccount(0.05, 500);

// Deposit $100 into the second account
Michael.makeDeposit(100, 1);

// Withdraw $50 from the first account
Michael.makeWithdraw(50);

// Display the balance of the second account
Michael.displayUserBalance(1);