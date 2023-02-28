let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
  let coin = Math.floor(Math.random() * 2);

  if (coin === 0) {
    console.log("Heads");
    headsCount++;
  } else {
    console.log("Tails");
    tailsCount++;
  }
}

if (headsCount === 11) {
  console.log("Heads won 11 times!");
} else {
  console.log("Tails won 11 times!");
}