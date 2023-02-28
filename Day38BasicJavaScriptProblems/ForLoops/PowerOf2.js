const n = pasrseInt(prompt("Enter an integer number "));

if (n < 0) {
  console.log("Error: Invalid input.");
} else {
  let power = 0;
  while (power <= n && Math.pow(2, power) <= 256) {
    console.log(" 2 ^ " + power +" = " + Math.pow(2, power));
    power++;
  }
}