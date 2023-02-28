const n = parseInt(prompt("Enter a number:"));

if (n <= 0) {
  console.log("Error: n must be a positive integer.");
} else {
  let harmonic = 0;
  for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
  }
  console.log("The "+ n +" th harmonic number is "+ harmonic);
}