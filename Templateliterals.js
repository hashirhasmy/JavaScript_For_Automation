const name = "John";
//backticks ==> ``
const message = `Hello, ${name}! Welcome to JavaScript.`;
console.log(message);

const multilineMessage = `This is a message that 
                            spans multiple lines.
                            It is created using template literals.`;
console.log(multilineMessage);

function greet(name) {
    return `//div[text()="${name}"]`;
}

console.log(greet('Hashir\'s'));