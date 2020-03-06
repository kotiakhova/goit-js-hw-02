'use strict'


const findLongestWord = function(string) {
    let longestWord = '';
    let array = string.split(' ');
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        }
    }
    return longestWord;
  };
  

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'