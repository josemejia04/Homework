// JavaScript Total Recall
// I. Variables & Datatypes
// A. Q + A
// How do we assign a value to a variable?
// You assign a value to a variable by using the equal sign to set the value.

// How do we change the value of a variable?
// You change the value of a variable by either changing it directly where it is located or reassigning it to a new value using the equal sign.

// How do we assign an existing variable to a new variable?
// You set the variable equal to the new variable.

// Remind me, what are declare, assign, and define?
//Declare is when you state what an object will be. Assign is to give an object a value. Define is stating what it will do.

// What is pseudocoding and why should you do it?
//Pseudocoding is an informal layout of what your code will do.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// You should spend 90% of the time coming up with the solution and 10% executing the solution depending on experience level.

//====================================================================================================================================================================

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
//====================================================================================================================================================================

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
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== '48');


//====================================================================================================================================================================

// D. The farm

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

