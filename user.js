class User {
    constructor(name, email) {
        // attributes
        this.name = name;
        this.email = email;
        this.accountBalance = 0;
    }

    // methods
    makeDeposit(amount) {
        this.accountBalance += amount;
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }
    
    displayBalance() {
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`)
    }

    transferMoney(otherUser, amount) {
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
    }
}

const Michael = new User("Michael", "mj@yahoo.com");

const Jay = new User("Jay", "jay@yahoo.com")

const Huey = new User("Huey", "hj@yahoo.com")

Michael.makeDeposit(150);
Michael.makeDeposit(75);
Michael.makeDeposit(25);
Michael.makeWithdrawal(150);

Jay.makeDeposit(2000);
Jay.makeDeposit(4500);
Jay.makeWithdrawal(6500);
Jay.makeWithdrawal(100);

Huey.makeDeposit(50000);
Huey.makeWithdrawal(4500);
Huey.makeWithdrawal(1400);
Huey.makeWithdrawal(25000);

Huey.transferMoney(Jay, 150);

console.log(Jay.displayBalance());