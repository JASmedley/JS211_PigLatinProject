'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//this function gets the index of the first vowel of a word
const indexOfFirstVowel = (word) => {
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i])) {
      return i;
    }
  }
  return -1; 
}

//this function should return the pig latin translation of the word passed in. 
const pigLatin = (word) => {
  let indexOfVowel = indexOfFirstVowel(word);
  let part1 = word.substring(0,indexOfVowel);
  let part2 = word.slice(indexOfVowel);

  if(indexOfVowel ==0) {
    return word+"yay";
  }

  if(indexOfVowel ==-1){
    return word+"ay";
  }

  return part2+part1+"ay"
}

const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}



// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {
  getPrompt();
}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
