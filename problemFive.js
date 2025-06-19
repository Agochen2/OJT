//remove all capital letters 
const someStrings = "Hello World"

let resultString = "";
for (let i = 0; i < someStrings.length; i++) {
    //runs as long as i is less than the length of someStrings
    const currentChar = someStrings[i];
    //currentChar is the character at the index of i in someStrings
    if (currentChar === currentChar.toLowerCase()) {
        //checks if the current character is lowercase
        resultString += currentChar;
        //if lowercase added to resultString
    }
}

console.log(resultString); 