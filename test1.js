// Section A. Q + A

// Q. How do we assign a value to a variable?
// A. We assign a value to a variable by using the assign operator "=".

// Q. How do we change the value of a variable?
// A. We can change the value of a variable by simply reassigning it with a new value unless the variable decalaration is "const".

// Q. How do we assign an existing variable to a new variable?
// A. You use the assignment operator to assign a variable to a new variable.
// let a = 0;
// let b = a;

// Q. Remind me, what are declare, assign, and define?
// A. Declare is when you give a variable a name. Assign is when you give a variable a value. Define is when you state how a variable or method will be used.

// Q. What is pseudocoding and why should you do it?
// A. Pseudocode is essentially an informal illustatiion of your code. It gives you a comprehension of what the code is doing.

// Q. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// A. 90% of time should be spent thinking of how to resolve the issue and 10% should be spent actually writing or executing the resolution.

//========================================================================================================================================================================

// Section B. Strings
 
// let firstVariable = 'Hello World';
// firstVariable = 7;
// let secondVariable = firstVariable;
// secondVariable = 'any string';
// console.log(firstVariable); = 7

// let yourName = 'Jose';

// function greet() {
//     return 'Hello, my name is ' + yourName;
// }

// console.log(greet());

//==========================================================================================================================================================================

// Section C. Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false);
// console.log(e == 'Kevin');
// console.log(a !== b !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a === a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== '48');

//=========================================================================================================================================================================

//Section D. The farm

// let animal = 'cow';

// function farm(){ if (animal === 'cow'){
//     return 'mooooo';
// }
// else {
//     return "Hey! You're not a cow.";
// }
// }
// console.log(farm());

//==========================================================================================================================================================================

// Section E. Driver's Ed

// let personAge = 17;

// function ageCheck(){ if (personAge >= 16){
// return 'Here are the keys!';}
// else {
//     return "Sorry, you're too young.";
// }
// }

// console.log(ageCheck(personAge));

//==========================================================================================================================================================================

// Section II. Loops
// A. The basics

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 10; i <= 400; i++){
//     // console.log(i);
// }

// for(let i = 12; i <= 4000; i++){
//     if(i % 3 === 0){
//     console.log(i);
// }
// }

// B. Get even

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//     console.log(i + '<-- is an even number');
// }
// }

//============================================================================================================================================================

// C. Give me Five

// for(let i = 0; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//     console.log('I found a ' + i + '. Three is a crowd. High five!');
//     }
//     else if(i % 5 === 0){
//     console.log('I found a ' + i + '. High five!');
//     }
//     else if (i % 3 === 0) {
//     console.log('I found a ' + i + '. Three is a crowd');
//     }
// }

//=====================================================================================================================================================

// D. Savings account

// let sum = 0;
// let bank_account = 0;
// while (sum <= 10) {
// 	bank_account = bank_account + sum
// 	sum++
// }
// console.log(bank_account);

// let sum = 0;
// let bank_account = 0;
// while (sum <= 100) {
// 	bank_account = bank_account + sum
// 	sum++
    
// }
// console.log(bank_account * 2);

//=========================================================================================================================================================
// III. Arrays & Control flow
// A. Talk about it:

// Q. What are the things in an array called?
// A. elements

// Q. Do Arrays guarantee those things will be in order?
// A. yes starting from index 0

// Q. What real-life thing could you model with an array?
// A. books or anything requiring an index order

//===================================================================================================================================================================

// B. Easy Does It
// let qoutes = ['qoute 1', 'qoute 2', 'qoute 3'];

// C. Accessing elements
// const randomThings = [1, 10, "Hello", true]
// randomThings[2] = 'World';
// console.log(randomThings[2]);

// D. Change values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// ourClass.splice(4, 1, 'Octocat');
// ourClass.splice(4, 0, 'Cloud City');
// console.log(ourClass[4]);

//===============================================================================================================================================================

// E. Mix It Up

// const myArray = [5, 10, 500, 20];
// myArray.push('Aegon', 'Cloud');
// myArray.shift();
// myArray.unshift('Bob Marley');
// myArray.pop();
// myArray.reverse();
// console.log(myArray);

// Q. Did you mutate the array?
// A. Yes the array mutated since the index order was changed.

// Q. What does mutate mean? 
// A. Mutate means that the data can be changed.

// Q. Did the .reverse()method return anything?
// A. It reversed the order of the array.

//==========================================================================================================================================

// F. Biggie Smalls

// let number1 = 100;

// if(number1 < 100){
//     console.log('little number');
// } 
// else {
//     console.log('big number');
// }

//================================================================================================================================================

// G. Monkey in the Middle


// function check(num){
//     if(num < 5) {
//     console.log('little number');
// } 
// else if (num > 10){
//     console.log('big number');
// }
// else {
//     console.log('monkey');
// }
// }
// return check(6);

//==================================================================================================================================================

//H. What's in Your Closet?

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

// kristynsCloset.splice(6, 0, 'raybans');
// kristynsCloset[5] = 'stained knit hat';
// console.log(kristynsCloset);
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// console.log(thomsCloset[0][1]);
// console.log(thomsCloset[1][1]);
// console.log(thomsCloset[2][1]);

// thomsCloset[1][2] = 'Footie Pajamas';
// console.log('Thom is looking fierce in a ' + thomsCloset[0][1] + ', ' + thomsCloset[1][1] + ', and ' + thomsCloset[2][1] + '!');
// console.log(thomsCloset[1][2]);


//===========================================================================================================================================

// IV. Functions
// A. printGreeting

// function printGreeting(name) {
//     return 'Hello there, ' + name + '!';
// }
// console.log(printGreeting("Slimer"));

//=============================================================================================================================================

// B. printCool

// function printCool(name) {
//  return name + ' is cool';
// }

// console.log(printCool("Captain Reynolds"));


//=====================================================
// C. calculateCube

// function calculateCube(num) {
//     return num * num * num;
// }

// console.log(calculateCube(5));

//=====================================================

// D. isVowel

// function isVowel(vowel) { 
//     if(vowel === 'a', 'e', 'i', 'o', 'u', 'y') {
//         return true;
//     }
// else{
//     return false;
// }
// }

// console.log(isVowel('Y'));

//==========================================================

// E. getTwoLengths

// function getTwoLengths(x, y){
//     arr = [x.length,  y.length];
//     return arr;
// }

// console.log(getTwoLengths("Hank", "Hippopopalous"));

//===========================================================

// F. getMultipleLengths

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//==============================================================================

// G. maxOfThree

// console.log(maxOfThree(6, 9, 1));

//=================================================================================

// H. printLongestWord

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//==================================================================================================================

// Objects
// A. Make a user object

//======================================================================================================================

// B. Update the user

//=========================================================================================================================

// C. Adding keys and values

//===========================================================================================================================

// D. Shopaholic!

//============================================================================================================================

// E. Object-within-object


//=============================================================================================================================

// F. Loops


//=============================================================================================================================

// G. Functions can operate on objects

