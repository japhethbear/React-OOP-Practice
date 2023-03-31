class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
    //attributes
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    // methods
    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor (name, wisdom = 10) {
    // attributes    
        super(name, 200, 10, 10)
        this.wisdom = wisdom;
    }
    // methods

    speakWisdom(message) {
        super.drinkSake();
        console.log(message);
    }


}

const superSensei = new Sensei("Master Splinter");

superSensei.speakWisdom("What one programmer can do in one month, two programmers can do in two months.")

superSensei.showStats();


