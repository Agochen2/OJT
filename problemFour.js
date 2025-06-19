const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const givenString = 'hellojavascript';

let result = '';
for (index = 0; index < givenString.length; index++) {
  if (givenString[index] === ''){
    strBuilt += '';
    continue;
  }
  const targetedChar = givenString[index].toLocaleLowerCase(); // "h"
  const charIndexLocation = alphabet.indexOf(targetedChar); // index of 'h' in alphabet tells us where it is in the alphabet string

result += alphabet.charAt(charIndexLocation); // gives the 'h'
}
console.log(result); 
