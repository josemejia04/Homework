class Hamster {
    constructor(owner = '', name, price = 15) {
    this.owner = owner;
    this.name = name;
    this.price = price;
  }

   wheelRun() {
    console.log('squeak squeak');
  }
   eatFood() {
    console.log('nibble nibble');
  }
   getPrice() {
    return this.price;
  }
}

// const person = new Hamster('Jose', 'Gizmo');
// console.log(person);
// console.log(person.getPrice());

//=======================================================

class Person {
    constructor (name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.mood = mood;
      this.hamsters = hamsters;
      this.bankAccount = bankAccount;
    }

    getName () {
        return this.name;
    }
    getAge () {
        return this.age;
    }
    getBankAccount(){
        return `This is how much money I currently have ${this.bankAccount}.`;
    }
    getWeight () {
        return this.weight;
    }
    greet () { 
        return `Hi there! My name is ${this.name}. Nice to meet you!`;
    }
    eat (arg2) {
        this.weight += arg2, this.mood += arg2;
        return `My weight is now ${this.weight} but my mood is ${this.mood} because I gained weight.`;
    }
    exercise(arg3) {
        this.weight -= arg3;
        return `I exercised and now my weight is ${this.weight} pounds. Looking good!`;
    }
    ageUp(arg1) {
        this.age += arg1;
        this.height += arg1;
        this.weight += arg1;
        this.mood -= arg1;
        this.bankAccount += 10;
        return `My age is currently ${this.age}. 
My height is currently ${this.height} feet. 
My weight is currently ${this.weight} pounds. 
My mood is now ${this.mood} because I am getting older. 
My bank account now has ${this.bankAccount}.`;
    }
    buyHamster(hamster) {
        if (this.bankAccount >= hamster.getPrice()) {
            this.bankAccount -= hamster.getPrice();
            this.hamsters.push(hamster);
            this.mood += 10;
            return `I bought a hamster! I'm going to name him Gus.`;
        }
        else {
        return `Ah man! I do not have enough money. I guess I need to go to work...`;
    }
  }
}

  const timmy = new Person('Timmy');
  console.log(timmy.greet());
  console.log(timmy.ageUp(5));
  console.log(timmy.eat(5));
  console.log(timmy.exercise(5));
  console.log(timmy.ageUp(5));
  console.log(timmy.getBankAccount());

  const gus = new Hamster('Timmy', 'Gus');
  console.log(gus);
  console.log(timmy.buyHamster(gus));
  console.log(timmy.ageUp(5));
  console.log(timmy.eat(2));
  console.log(timmy.exercise(2));

//=============================================================================================

class Dinner { 
    constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
    }
}

// const dinnerTonight = new Dinner('Caesar Salad', 'Steak', 'Creme Brulee');
// console.log(dinnerTonight);

class Chef extends Dinner {
    constructor(appetizer, entree, dessert){
    super(appetizer, entree, dessert);
    }
makeDinner (appetizer, entree, dessert) { 
   return `Good evening. Tonight you will be having a three course meal. You are having ${this.appetizer} as an appetizer. Your main dish tonight will be ${this.entree}. Last but not least you will have ${this.dessert} for dessert.`;
    }  
}

const dinnerOne = new Chef('caesar salad ', 'steak ', 'creme brulee');
const dinnerTwo = new Chef('beer ', 'wings ', 'cake');
const dinnerThree = new Chef('sliders ', 'tacos ', 'ice Cream');

// console.log(dinnerOne.makeDinner());
// console.log(dinnerTwo.makeDinner());
// console.log(dinnerThree.makeDinner());