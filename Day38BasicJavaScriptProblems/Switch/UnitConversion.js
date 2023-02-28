const choice = parseInt(prompt("Enter your choice:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet"));

switch (choice) {
  case 1:
    const feetToInch = parseFloat(prompt("Enter length in feet:"));
    const inch = feetToInch * 12;
    console.log(feetToInch+" feet " + inch + "inches");
    break;
  case 2:
    const feetToMeter = parseFloat(prompt("Enter length in feet:"));
    const meter = feetToMeter * 0.3048;
    console.log(feetToMeter+" feet " + meter + "meters");
    break;
  case 3:
    const inchToFeet = parseFloat(prompt("Enter length in inches:"));
    const feet = inchToFeet / 12;
        console.log(inchToFeet+" inches " + feet + "feets");
    break;
  case 4:
    const meterToFeet = parseFloat(prompt("Enter length in meters:"));
    const feet2 = meterToFeet / 0.3048;
    console.log(meterToFeet+" meters " + feet2 + "feets");
    break;
  default:
    console.log("Invalid input.");
    break;
}