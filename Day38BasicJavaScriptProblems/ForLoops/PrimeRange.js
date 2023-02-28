const prompt = require('prompt-sync')();
const start = parseInt(prompt("Enter start number"));
const end = parseInt(prompt("Enter end number"));

if (start > end) {
  console.log("Error: Invalid range.");
} else if (start <= 1) {
  console.log("Prime numbers start from 2.");
} else {
    console.log("Prime numbers are")
  for (let i = start; i <= end; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}




