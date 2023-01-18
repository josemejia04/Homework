const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick!', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
// Determine if every number is greater than or equal to 0
// nums.every(number => number >= 0);

let greaterThanZero = nums.every(functionZero);

function functionZero(value) {
  if(value >= 0){
    return true;
  }
  else {
    return false;
  }
}
  // console.log(greaterThanZero);

// determine if every word shorter than 8 characters
let shorterThanEight = panagram.every(shorterFunction);

function shorterFunction(arg) {
  if (arg.length < 8) {
return true; 
  }
  else {
    return false;
  }
}
// console.log(shorterThanEight);

// Filter
// filter the array for numbers less than 4
const result = nums.filter(nums => nums < 4);
// console.log(result);

// filter words that have an even length

const newArray = panagram.filter(panagram => panagram.length % 2 == 0);
// console.log(newArray);

// Find
// Find the first value divisible by 5
const divFive = nums.find(nums => nums % 5 == 0);
// console.log(divFive);


// find the first word that is longer than 5 characters
const longerWord = panagram.find(panagram => panagram.length >= 5);
// console.log(longerWord);


// Find Index
// find the index of the first number that is divisible by 3
const divByThree = (element) => element % 3 == 0;
// console.log(nums.findIndex(divByThree));

// find the index of the first word that is less than 2 characters long
const lessThanTwo = (element) => element.length < 2;
// console.log(panagram.findIndex(lessThanTwo));

// For Each
// console.log each value of the nums array multiplied by 3
// nums.forEach(element => console.log(element * 3));


// console.log each word with an exclamation point at the end of it
panagram.forEach(element => console.log(element.includes('!')));


// Thought Questions

// What happened to the original array?
// Can you store the values from a forEachmethod in a new array?
// Map
// make a new array of each number multiplied by 100
// make a new array of all the words in all uppercase
// Thought Questions

// What happened to the original array?
// Can you store the values from a mapmethod in a new array?
// Some
// Find out if some numbers are divisible by 7
// Find out if some words have the letter ain them

//Determine if every number is greater than or equal to 0











// const isGreaterThan0 = (arr) => {
//   let result = 0;
//   arr.forEach((element) => {
//     if (element < 0) {
//       result += 1;
//     }
//   });
//   return result > 0 ? false : true;
// };

// console.log("isGreaterThan0", isGreaterThan0(nums));



// const findTheFirstWordThatIsLongerThan5Characters = (arr) => {
//   return arr.find((element) => element.length > 5);
// };

// console.log(
//   "findTheFirstWordThatIsLongerThan5Characters",
//   findTheFirstWordThatIsLongerThan5Characters(panagram)
// );

