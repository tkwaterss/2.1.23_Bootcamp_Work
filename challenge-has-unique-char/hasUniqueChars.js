// Write your code below
// Given a word, return true if that word contains only unique characters. 
//Return false otherwise.
let word = 'helo';
const uniqueChars = (word) => {
    for(let i = 0; i < word.length; i++) {
        if(word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
            return false;
        }
    }
    return true;
}
console.log(uniqueChars(word));


//Instructor Solution using Set Constructor
function hasUniqueChars(word) {
    //the Set object lets you store unique values of any type, a value in a Set may only occure once.
    //Creates a variable equal to a new Set object
    let uniqueChars = new Set()
    //loops through each letter of the word
    for (let i = 0; i < word.length; i++) {
        //attempts to add each letter to the Set, duplicates cannot be added to a set
      uniqueChars.add(word[i])
    }
    //if the array size and word length are equal then all letters were added and no duplicates existed
    return uniqueChars.size === word.length
  }
  console.log(hasUniqueChars(word));

const unique = word => {
    let uniqueSet = new Set(word);
    console.log(uniqueSet);
    return uniqueSet.size === word.length;
}

console.log(unique(word));

    //Above code can replace if else statment

    // if(uniqueSet.size === word.length) {
    //     return true;
    // }
    // return false;

const uniqueSet = word => new Set(word).size === word.length
    
console.log(uniqueSet(word));







  //Another alternate solution (was my first attempt but didnt get the second for loop correct)
  const hasUnique = (word) => {
    for(let i = 0; i < word.length; i++) {
        for(let j = i + 1; j < word.length; j++) {
            if(word[i] === word[j]) {
                return false;
            }
        }
    }
    return true;
  }
  console.log(hasUnique(word));