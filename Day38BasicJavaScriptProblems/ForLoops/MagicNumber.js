const prompt=require("prompt-sync")({sigint:true}); 
let min = 1;
let max = 100;
let guess;

console.log("Think of a number between 1 and 100.");

while (true) {
  guess = Math.floor((min + max) / 2);

  let answer = prompt("Is your number less than "+guess+" (yes or no)");

  if (answer === "yes") {
    max = guess - 1;
  } else if (answer === "no") {
    min = guess + 1;
  } else {
    console.log("Invalid input. Please enter 'yes' or 'no'.");
    continue;
  }

  if (min > max) {
    console.log("You have entered an incorrect answer.");
    break;
  } else if (min === max) {
    console.log("Your number is "+min);
    break;
  }
}