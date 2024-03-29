// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function checkAnagrams( strA, strB) {
const aCharMap = buildCharMap(strA);
const bCharMap = buildCharMap(strB);

if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    return false;
}
for(let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
        return false;
    }
}
return true;
}

function buildCharMap(str) {
    const charMap = {};

    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

 console.log(checkAnagrams('rail safety', 'fairy tales'));
 console.log(checkAnagrams('RAIL! SAFETY!', 'fairy tales'));
 console.log(checkAnagrams('Hi there', 'Bye there'));