class Human {
    constructor(name, age) {
        // attributes
        this.name = name;
        this.age = age;
    }
    // methods
    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
const Japheth = new Human('Japheth', 30);
const John = new Human('John', 25);

Japheth.sayHello();
console.log(John)

class Student extends Human {
    constructor(name, age, currentStack) {
        super(name, age);
        this.currentStack = currentStack;
    }

    sayHello() {
        console.log(`Hello, I'm Bear and I'm studying MERN.`)
    }

}

const Bear = new Student('Bear', 30, 'MERN');

Bear.sayHello();