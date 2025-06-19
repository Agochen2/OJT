//replace all 'i' with '1' and 'a' with '@'
const message = "I am learning and practicing JavaScript.";

let endMessage = ""
for (let i = 0; i<message.length; i++) {
    const currentChar = message[i];
    if (currentChar === 'i') {
        endMessage += '1';
    } else if (currentChar === 'a') {
        endMessage += '@';
    } else {
        endMessage += currentChar;
    }
}

console.log(endMessage); 