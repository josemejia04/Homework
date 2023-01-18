/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
*/
function same(arr1, arr2){

    if(arr1.length != arr2.length){
        return false;
    }
        let counter1 = {};
        let counter2 = {};

        for(let val of arr1){
            counter1[val] = (counter1[val] || 0) + 1;
        }

        for(let val of arr2){
            counter2[val] = (counter2[val] || 0) + 1;
        }

        for(let key in counter1) {
            if(!(key ** 2 in counter2)) {
                return false;
            }
            if(counter2[key ** 2] !== counter1[key]) {
                return false;
            }
        }
        return true;
    }
console.log(same([1,2,3], [1,9]));


same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)



// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1
// use a frequencyCounter no nested loops

function maxChar(str){

    const charFrequency = {}

    for(let char of str) {
        if(!charFrequency[char]){
            charFrequency[char] = 1;
        }
        else {
            charFrequency[char]++;
        }
    }
    let maxChar = '';
    let maxFrequency = 0;

    for (let char in charFrequency) {
        if(charFrequency[char] > maxFrequency){
            maxChar = char;
            maxFrequency = charFrequency[char];
        }
    }
    return maxChar;
}


console.log(maxChar("abcccccccd")); // === "c"
console.log(maxChar("apple 1231111")); // === "1