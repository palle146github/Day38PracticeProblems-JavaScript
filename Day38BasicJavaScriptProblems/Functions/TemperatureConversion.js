function toFahrenheit(degC) {
  if (degC >= 0 && degC <= 100) {
    let degF = (degC * 9/5) + 32;
    console.log(degC + "°C = "+degF+" °F");
  } else {
    console.log("Temperature should be within 0°C and 100°C");
  }
}

function toCelsius(degF) {
  if (degF >= 32 && degF <= 212) {
    let degC = (degF - 32) * 5/9;
    console.log(`${degF} °F = ${degC} °C`);
  } else {
    console.log("Temperature should be within 32°F and 212°F");
  }
}

let temperature = Number(prompt("Enter the temperature:"));
let selection = prompt("Enter the conversion selection (C or F):");

switch (selection) {
  case "C":
    toFahrenheit(temperature);
    break;
  case "F":
    toCelsius(temperature);
    break;
  default:
    console.log("Invalid selection. Please enter either C or F.");
    break;
}