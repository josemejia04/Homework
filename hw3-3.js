class Governor {
    constructor(name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
   }

   getName() { return this.name; }
   getAge() { return this.age; }
   getState() { return this.state; }

    static passLaw () { 
        console.log('Your law has been passed!');
}
}

const leader = new Governor('Derrick Brightfuture', 45, 'CA');

// console.log(leader);
// console.log(Governor.passLaw());

//=====================PARENT CLASS=========================================

class Person {
    constructor (name, age, state) {
      this.name = name;
      this.age = age;
      this.state = state;
    
    }
    work () {
      console.log('Time for work!');
    }
    gym () {
      console.log('Time for a workout!');
    }
    home () {
        console.log('Time to relax!')
    }
  }

  const personA = new Person('George', 42, 'DC');
  const personB = new Person('Rick', 35, 'NC');

//   console.log(personA.work());
//   console.log(personB.gym());


  //======================CHILD CLASSES=====================================
  class PostalWorker extends Person {
    constructor (name, age, state, yearsOfExperience){
        super(name, age, state);
        this.yearsOfExperience = yearsOfExperience;
    }
    deliverMail () {
        console.log(`${this.name} is out delivering mail!`);
    }
  }

  class Chef extends Person{
    constructor (name, age, state, yearsOfExperience){
        super(name, age, state);
        this.yearsOfExperience = yearsOfExperience;
    }
    cook () {
        console.log(`${this.name} is cooking!`);
    }
  }

  const person1 = new PostalWorker('James', 36, 'TX', 14);
  const person2 = new PostalWorker('Robert', 28, 'Florida', 7);

  const person3 = new Chef('Ana', 39, 'CA', 12);
  const person4 = new Chef('Juan', 33, 'NY', 16);

  console.log(person1.deliverMail());
  console.log(person2.gym());

  console.log(person3.cook());
  console.log(person4);