// PEDAC Guided Practice: Sort by Most Adjacent Consonants
/*
// Understand the Problem

input: array of strings

output: new array of strings

explicit rules:
- new strings sorted to highest number of adjacent consonants
- if same number of adjcons stay in same order
- adjacent is in same word and across spaces (remove spaces?)

implicit rules:
- strings can have multiple words
- identify and exclude vowels (continue in a for loop)
- each string is counted to a total 
- single consonants don't count

questions: 
- what determines a consonant
- are upper and lowercase treated the same - not answered
- can strings be empty - not answered
- can the strings be altered (spaces removed) - no
- ascending or descending - descending

// Examples and test cases

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

// Data Structures
- array of strings
- object to track count of adjcons

// Algorithm
- identify consonants
- iterate through each string - helper function
  - input: a string
  - output: integer with count of adjacent consonents
  - copy to a temporary string
  - remove spaces, skip over vowels, store > 2 consonents in counter string, count the length of counter string
- keep a running count of consonants by excluding vowels and spaces
- sort the strings by count order
- join to an array and return

Helper function
- Remove the spaces from the input string
- Initialize a count to zero
- Initialize a temp string to an empty string
- Iterate through the input string. For each letter:
  - If the letter is a consonant, concatenate it to the temp string
  - If the letter is a vowel:
    - If the temp string has a length greater than 1
      AND the temp string has a length greater than the current count,
          set the count to the length of the temp string
    - Reset the temp string to an empty string
- Return the count
*/

// Code Solution

function sortStringsByConsonants(strings) {
  let stringsCopy = strings.slice();

  let sortedStrings = stringsCopy.sort((a, b) => {
    return countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a);
  });

  return sortedStrings;
}

function countMaxAdjacentConsonants(str) {
  str = str.split(' ').join('');
  let count = 0;
  let tempStr = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if ('bcdfghjklmnpqrstvwxyz'.includes(char)) {
      tempStr += char;

      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }
    } else {
      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }

      tempStr = '';
    }
  }
 
  return count;
}

// console.log(countMaxAdjacentConsonants('dddaa')); // 3
// console.log(countMaxAdjacentConsonants('ccaa'));  // 2
// console.log(countMaxAdjacentConsonants('baa'));   // 0
// console.log(countMaxAdjacentConsonants('aa'));    // 0


console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']