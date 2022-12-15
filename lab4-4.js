// Section 1
// Creating Classes & Factories
// Hamster

// class Hamster {
//     constructor(name){
//       this.owner = ''
//       this.name = name
//       this.price = 15
//     }
//     wheelRun(){
//       console.log('squeak squeak')
//     }
//     eatFood(){
//       console.log('nibble nibble')
//     }
//     getPrice(){
//       return this.price
//     }
//   }
// //=====================================================================================================================================
//   class Person {
//     constructor(name){
//       this.name = name
//       this.age = 0
//       this.height = 0
//       this.weight = 0
//       this.mood = 0
//       this.hamsters = []
//       this.bankAccount = 0
//     }
//     getName(){
//       return this.name
//     }
//     getAge(){
//       return this.age
//     }
//     getWeight(){
//       return this.weight
//     }
//     greet(){
//       console.log(`I am ${this.name} hello`)
//     }
//     eat(){
//       this.weight++
//       this.mood++
//   }
//     exercise(){
//       this.weight--
//     }
//     ageUp(){
//       this.age++
//       this.height++
//       this.weight++
//       this.mood--
//       this.bankAccount+=10
//     }
//     buyHamster(hamster){
//       this.hamsters.push(hamster)
//       this.mood+=10
//       this.bankAccount-=hamster.getPrice()
//     }
//   }


//   //===============================================================================================================================
//   const timmy = new Person('Timmy')
// for(let i =0; i < 5; i++){
//   timmy.ageUp()
// }
// for(let i =0; i < 5; i++){
//   timmy.eat()
// }
// for(let i =0; i < 5; i++){
//   timmy.exercise()
// }
// for(let i =0; i < 9; i++){
//   timmy.ageUp()
// }
// const gus = new Hamster('Gus')
// gus.owner = 'Timmy'
// timmy.buyHamster(gus)

// for(let i =0; i < 15; i++){
//   timmy.ageUp()
// }
// timmy.eat()
// timmy.eat()
// timmy.exercise()
// timmy.exercise()
// console.log(timmy);


// //=====================================================================================================================================

// class Dinner { 
//     constructor(appetizer, entree, dessert) {
//     this.appetizer = appetizer;
//     this.entree = entree;
//     this.dessert = dessert;
//     }
// }

// class Chef extends Dinner {
//     constructor(appetizer, entree, dessert){
//     super(appetizer, entree, dessert);
//     }
// makeDinner (appetizer, entree, dessert) { 
//    return `Good evening. Tonight you will be having a three course meal. You are having ${this.appetizer} as an appetizer. Your main dish tonight will be ${this.entree}. Last but not least you will have ${this.dessert} for dessert.`;
//     }  
// }

// const dinnerOne = new Chef('caesar salad ', 'steak ', 'creme brulee');
// const dinnerTwo = new Chef('beer ', 'wings ', 'cake');
// const dinnerThree = new Chef('sliders ', 'tacos ', 'ice Cream');

// console.log(dinnerOne.makeDinner());
// console.log(dinnerTwo.makeDinner());
// console.log(dinnerThree.makeDinner());

//=========================================================================================================================================================================

// A. Q + A
// student should be able to describe these answers in their own words
// How do we assign a value to a variable? let somevar = 10
// How do we change the value of a variable? somevar = 12
// How do we assign an existing variable to a new variable? let newvar = somevar
// Remind me, what are declare, assign, and define? no wrong answers, they should show an understanding of how to use these words
// What is pseudocoding and why should you do it? no wrong answers but they should understand that psuedo code is not code its plain english description of what they want to accomplish
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? no wrong answers but they should defend what they say

//==================================================================================================================================================================================================

// B. Strings Simply should follow the below instructions
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

// B. Strings
// let firstVariable = 'Hello World';
// firstVariable = 4;
// let secondVariable = firstVariable;
// secondVariable = 'Hola';
// console.log(firstVariable); 
// The value of is 4.

// let yourName = 'Jose';
// let greeting = 'Hello, my name is ' + yourName;
// console.log(greeting);


//=========================================================================================================================================================================================================================

// C. Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

//======================================================================================================================================

// D. The farm follow below instructions
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// function cowCheck(animal) {
//     if (animal === 'cow') {
// 	return 'mooooo';
// } else {
// 	return "Hey! You're not a cow.";
// }
// }
// console.log(cowCheck('cow'));
//====================================================================================================================================================================
// E. Driver's Ed

// let personAge = 18;
// if (personAge >= 16) {
// 	console.log('Here are the keys.');
// } else {
// 	console.log("Sorry, you're too young.");
// }

//====================================================================================================================================================================

// II. Loops
// A. The basics

// for (let i = 0; i <= 10; i++) {
// 	console.log(i);
// };
// for (i = 10; i <= 400; i++) { 
// 	console.log(i);
// };
// for (i = 12; i <= 4000; i++) {
// if (i % 3 === 0) {
//     console.log(i); 
//     }
// }


//====================================================================================================================================================================

// B. Get even

// for (let i = 1; i <= 100; i++) {
//     if(i % 2 === 0) {
// 	console.log(i + " <-- is an even number");
// }
// }

//====================================================================================================================================================================
// C. Give me Five

// for (let i = 0; i <= 100; i++){
// 	if (i % 5 === 0 && i % 3 === 0) {
// 		console.log('I found a ' + i + '. Three is a crowd. High five!');
// 	} else if (i % 5 === 0) {
// 		console.log('I found a ' + i + '. High five!');
// 	} else if (i % 3 === 0) {
// 		console.log('I found a ' + i + '. Three is a crowd.');
// 	}
// }

//====================================================================================================================================================================
// D. Savings account

// let bank_account = 0;
// for (let i = 0; i <= 10; i++) {
// 	bank_account += i;
// }
// console.log(bank_account);

// for (i = 0; i <= 100; i++) {
// 	bank_account += i * 2;
// }
// console.log(bank_account);


//====================================================================================================================================================================
// III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called?
//Arrays are a list of values.

// Do Arrays guarantee those things will be in order?
//Yes

// What real-life thing could you model with an array?
// Anything needing to be in a specific order like books.

//====================================================================================================================================================================
// B. Easy Does It

// let arr1 = ['a', 'b', 'c'];
// console.log(arr1);


//====================================================================================================================================================================
// C. Accessing elements
// const randomThings = [1, 10, 'Hello', true];
// console.log(randomThings[0]);
// randomThings[2] = 'World';
// console.log(randomThings);


//====================================================================================================================================================================
// D. Change values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// console.log(ourClass[2]);
// ourClass[4] = 'Octocat';
// ourClass.push('Cloud City');
// console.log(ourClass);

//====================================================================================================================================================================
// E. Mix It Up

// const myArray = [5, 10, 500, 20];
// myArray.push('Aegon', 'Cloud City');
// console.log(myArray);
// myArray.shift();
// console.log(myArray);
// myArray.unshift('Bob Marley');
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.reverse();
// console.log(myArray);

// Yes it mutated. Mutate means to manipulate the value of the element within array. The '.reverse' method reversed the order of the array elements. 


//====================================================================================================================================================================
// F. Biggie Smalls

// let num = 100;
// if (num < 100) {
// 	console.log('little number');
// } else {
//     console.log('big number');
// }

//====================================================================================================================================================================
// G. Monkey in the Middle

// let num = 7;
// if (num < 5) {
// 	console.log('little number');
// } 
// else if (num > 10) {
// 	console.log('big number');
// } 
// else {
// 	console.log('monkey');
// }

//====================================================================================================================================================================
// H. What's in Your Closet?

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];


// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// kristynsCloset.splice(5, 0, "raybans");
// kristynsCloset[4] = "stained knit hat";
// thomsCloset[0][0];
// thomsCloset[1][1];
// thomsCloset[2][1];
// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!");
// thomsCloset[1][2] = "Footie Pajamas";


//====================================================================================================================================================================
// IV. Functions
// A. printGreeting

// function printGreeting(name) {
// 	return 'Hello there, ' + name + '!';
// }
// console.log(printGreeting('Slimer'));


//====================================================================================================================================================================
// B. printCool

// function printCool(name) {
// 	return name + ' is cool!';
// }
// console.log(printCool('Captain Reynolds'));

//====================================================================================================================================================================
// C. calculateCube

// function calculateCube(num) {
// 	return num * num * num;
// }
// console.log(calculateCube(5));

//====================================================================================================================================================================
// D. isVowel

// function isAVowel(vowel) {
// 	if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' || vowel === 'y' || 
//     vowel === 'A' || vowel === 'E' || vowel === 'I' || vowel === 'O' || vowel === 'U' || vowel === 'Y') {
// 		return true;
// 	} 
//     else {
// 		return false;
// 	}
// }
// console.log(isAVowel('e'));


//====================================================================================================================================================================
// E. getTwoLengths

// function getTwoLengths(string1, string2) {
// 	const lengthArray = [string1.length, string2.length];
// 	return lengthArray;
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));


//====================================================================================================================================================================
//F. getMultipleLengths

// function getMultipleLengths([a, b, c, d, e]){
//     arr = [a.length, b.length, c.length, d.length, e.length];
//     return arr;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//=================================================================================
//G. maxOfThree
// let highest;
// function maxOfThree(x, y, z) {
//     if(x >= y && x >= z) {
//         highest = x; 
//         return x + ' is the highest number'; 
//     }
//     else if (y >= x && y >= z) {
//         highest = y;
//         return y + ' is the highest number'; 
//     }
//     else {
//         highest = z;
//         return z + ' is the highest number'; 
//     }
//     }

// console.log(maxOfThree(6, 9, 11));

//==========================================================================================
// H. printLongestWord

// function printLongestWord(arr1){
// 	let longest = ' ';
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i].length > longest.length) {
// 			longest = arr1[i];
// 		}
// 	}
// 	return longest;
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanut butter", "big", "Todd"]));

//=============================================================================================================
//Objects
//A. Make a user object
// let user = {
//     name:'jose',
//     email:'josedoe@gmail.com', 
//     age: 37,
//     purchased:[]}


//=============================================================================================================
// B. Update the user

// user.email = 'jdoe@hotmail.com';
// user.age += 1;

//==============================================================================================================
//C. Adding keys and values

// user.location = 'location';


//==============================================================================================================
//D. Shopaholic!
// user.purchased.push('carbohydrates');
// user.purchased.push('peace of mind');
// user.purchased.push('Merino jodhpurs');
// console.log(user.purchased[2]);

//==============================================================================================================
// E. Object-within-object

// user.friend = {
//     name: 'Grace Hopper',
//     age: 85,
//     location: 'the moon',
//     purchased: []
// }
// user.friend.age = 55;

// console.log(user.friend.name);
// console.log(user.friend.location);
// console.log(user.friend.age);
// user.friend.purchased.push('The One Ring', 'A latte');
// console.log(user.friend.purchased[1]);
//==============================================================================================================
//F. Loops
// for(let i = 0; i < user.purchased.length; i++){
// console.log(user.purchased[i]);
// }

// for(let i = 0; i < user.friend.purchased.length; i++){
//     console.log(user.friend.purchased[i]);
// }

//==============================================================================================================
//G. Functions can operate on objects

// function updateUser() {
//     user.age += 1;
//     user.name = user.name.toUpperCase();
// }


// function oldAndLoud(person) {
//     person.age += 1;
//     person.name = person.name.toUpperCase();
// }

// console.log(oldAndLoud(user));




