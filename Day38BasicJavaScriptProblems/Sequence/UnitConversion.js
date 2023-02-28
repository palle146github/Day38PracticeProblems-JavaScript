//1
let oneFeet = 12; //i feet = 12 inches
let y = 42 / oneFeet;
console.log("42 inches is " + y +" feets")

//2
let rectLength = 60;//feet
let rectBreadth = 40;//feet
let meter =  3.281;
let area = rectLength*rectBreadth;
let areaMeters = (rectLength/meter)*(rectBreadth/meter)
let totalArea = 25*area;
let totalAcre = totalArea/43560

console.log("Area of one plot in feets " + area +" square feets")
console.log("Area of one plot in meters " + areaMeters +" square meters")
console.log("Total 25 plots area in feets " + totalArea + " square feets")
console.log("Total 25 plots area in acres " + totalAcre)


