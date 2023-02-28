let money = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
  bets++;

  let bet = Math.floor(Math.random() * 2);

  if (bet === 0) {
    money--;
  } else {
    money++;
    wins++;
  }
}

console.log("Number of bets made: " + bets);
console.log("Number of times won: "+ wins);

if (money === 0) {
  console.log("You're broke!");
} else {
  console.log("You've reached your goal of Rs 200!");
}




