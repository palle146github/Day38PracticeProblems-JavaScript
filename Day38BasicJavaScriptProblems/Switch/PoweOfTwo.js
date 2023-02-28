const n = parseInt(prompt("Enter a number:"));

if (isNaN(n)) {
  console.log("Invalid input.");
} else {
  console.log("Power\tValue");
  console.log("-----\t-----");
  for (let i = 0; i <= n; i++) {
    const powerOf2 = Math.pow(2, i);
    console.log(i + " : "+ powerOf2 );
  }
}