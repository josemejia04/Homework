//Part I: HTML & CSS

// video 1. 
// Video 2. 
//Video 3. 
// Video 4. 


//=====================================================================================================================================
//Part II: JavaScript Reps
//Easy Going

// for (let i = 1; i <= 20; i++) {
//  console.log(i);
// }


//=====================================================================================================================================
//Get Even

// for (let i = 0; i <= 200; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' is an even number.');
// }
// }

//=====================================================================================================================================

// Fizz Buzz

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + ' FizzBuzz');
//     }
//     else if(i % 3 === 0) {
//         console.log(i + ' Fizz');
//     }

//     else if (i % 5 === 0){
//         console.log(i + ' Buzz');
//     };
// };

//=====================================================================================================================================

// Wild Wild Life

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee.splice(2, 1, 5001)
// console.log(plantee);

// wolfy.splice(3, 1, "Gotham City");
// console.log(wolfy);

// dart.push("Hawkins");
// console.log(dart);

// wolfy.splice(0, 1, 'Gameboy');
// console.log(wolfy);

//=====================================================================================================================================

//Yell at the Ninja Turtles

// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (let turtle of ninjaTurtles) {
//     ninjaTurtles = turtle.toUpperCase();
//     console.log(ninjaTurtles);
// }

//=====================================================================================================================================

//Methods, Revisited

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
// 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 
// 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.indexOf('Titanic'));

// use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
//It sorted the array in alphabetical order. As long as the method is ran the array will be changed.

// favMovies.sort();
// console.log(favMovies);


// Use the method pop

// favMovies.pop();
// console.log(favMovies);


// push"Guardians of the Galaxy"

// favMovies.push('Guardians of the Galaxy');
// console.log(favMovies);


// Reverse the array

// favMovies.reverse();
// console.log(favMovies);

// Use the shiftmethod

// favMovies.shift();
// console.log(favMovies);

// unshift- what does it return?
//It adds an element to the the beginning of the array.

// favMovies.unshift('Test');
// console.log(favMovies);


// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
//Yes it altered the array.

// console.log(favMovies.indexOf('Django Unchained'));
// favMovies.splice(3, 1, 'Avatar');
// console.log(favMovies);

// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?

// console.log(favMovies.length);
// console.log(favMovies[10]);

// store the value of your slicein a variable, console.log it - Thought question: what is going on here?

//  halfFavMovies = favMovies.slice(10);

// console.log your final results

// console.log(halfFavMovies);

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// It returned the index of -1.
// console.log(favMovies.indexOf('Fast and Furious'));

// Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?
// Let - offers both mutation and reassigning
// Const - offers mutation but not reassigning
// Mutation - updates the values present in the memory
// Reassign - variable points to new memory locations where new values are stored
//If your usecase only needs mutation, you can go for const.. if you need reassigning then go for let.


//=====================================================================================================================================
//Where is Waldo

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// whereIsWaldo.splice(1, 1);
// whereIsWaldo[1].splice(2, 1, 'No One');
// // console.log(whereIsWaldo);

// // for(let i = 0; i < whereIsWaldo.length; i++){
// //     if (whereIsWaldo[i].includes('Waldo'));{
// //     console.log(whereIsWaldo.indexOf('Waldo'));
// //     }
// // }
// console.log(whereIsWaldo[2, [1, 1]]);

// console.log(whereIsWaldo[3, 1]);
// console.log(whereIsWaldo.indexOf("Waldo"));


//=====================================================================================================================================
//Excited Kitten
// let kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
// for (let i = 0; i <= 20; i++) {
//     if(i % 2 === 0) {
//         console.log(i + kittyTalk[Math.floor(Math.random() * kittyTalk.length)]);
//     }
// }

//=====================================================================================================================================
//Find the Median
// const median = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

//   function median(arr) {
//     arr.sort((a, b)=> a - b );
//     let arrLen = arr.length;
//     let mid = Math.floor(arrLen / 2);
//     if (arrLen % 2 !== 0) {
//         return arr[mid];
//     }
//     else {
//         return (arr[mid - 1] + arr[mid]) / 2
//     }
//   }
//   console.log(median([14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]));


//Solution using ternary operator
// function median(arr) {
//     mid = Math.floor(arr.length / 2),
//     nums = [...arr].sort((a, b) => a - b);
//     return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
//   }

//   console.log(median([14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]));




