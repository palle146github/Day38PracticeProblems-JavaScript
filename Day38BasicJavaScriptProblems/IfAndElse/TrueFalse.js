const day = parseInt(prompt("Enter day :"));
const month = parseInt(prompt("Enter month :"));

if ((month == 3 && day > 20 && day <= 31) || (month == 4 && day >= 1 && day <= 30) || (month == 5 && day >= 1 && day <= 31) || (month == 6 && day >= 1 && day < 20))
    console.log("True");
else
    console.log("False");