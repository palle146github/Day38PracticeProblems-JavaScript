const prompt = require('prompt-sync')();
const num = parseInt(prompt("Enter a number"));

if (num < 0) {
  console.log("Error: Invalid input.");
} else if (num === 0 || num === 1) {
  console.log("The factorial of " + num +" is 1");
} else {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  console.log("The factorial of " + num + " is "+ factorial);
}