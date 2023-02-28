// Javascript arrays
// Map , filter , arrow functions
empWageArray = [160,80,160,160,80,0,80,0,160,80]

// ES6 -> ECMA Script
function m1(x){
  console.log("m1",x)
}
m1(45);

let m2 = (y) => {
    console.log("m2",y)
}
m2(67);

let totalWage = 0;
empWageArray.forEach(x => totalWage+=x);
console.log('total wage =>',totalWage)

function sumOfWages(total,wage) {
 return total + wage;
}

let sum1 = (totalWage1,wage1) => {
  return totalWage1 + wage1;
}
let total = empWageArray.reduce((x,y)=> x+y ,0)
console.log('total=>' , total)

let dayCount = 0;
let mapDayWithWage = empWageArray.map(dailyWage => {
  dayCount++;
  return dayCount + "=>" + dailyWage;
})
console.log('map of dayWithWage',mapDayWithWage)

 // let partWages = mapDayWithWage.filter(x => x.includes(80))
 // console.log('partWages ',partWages)

let fullTimeWageArray = mapDayWithWage.filter(x => x.includes(160))
console.log('fullTimeWageArray ',fullTimeWageArray)

let partTimeWageArray = mapDayWithWage.filter(x => x.includes(80))
console.log('partTimeWageArray ',partTimeWageArray)

let isAllFullTime = mapDayWithWage.every(x => x.includes(160))
console.log("isAllFullTime ",isAllFullTime)

let isSomeFullTime = mapDayWithWage.some(x => x.includes(160) )
console.log("isSomeFullTime ",isSomeFullTime)

let isFoundElem = mapDayWithWage.find(x => x.includes(80) )
console.log("isFoundElem ",isFoundElem)


let map = new Map();
map.set('ABC','aaaaaaa');
map.set(23,111111)
map.set('ABC',12233);
console.log('map => ',map)

for( let [key,value] of map){
  console.log(key , " => " ,value)
}

let val = map.delete(23);
console.log(val)

console.log(map)
console.log(map.has(23))

let origDogs = ["BullDog", "Beagle" , "Labrador"];
let cats = new Array("American Curl", "Bengal");
let birds = new Array("Falcons","Ducks","Flamingoes");

let slicedDogs = origDogs.slice(1,3);
console.log("OrigDogs =>"+origDogs);
console.log("slicedDogs =>",slicedDogs);

let copyDogs = [...slicedDogs];
console.log("copy Dogs =>",copyDogs);
copyDogs[0] = "ABC";
console.log("copy Dogs 1  =>",copyDogs);
console.log("slicedDogs 1 =>",slicedDogs);

let dogs = origDogs.slice(1);
console.log("Dogs =>",dogs);

let pushDog = dogs.push("Golden Retriever");
console.log("push Dogs =>",pushDog);
console.log("push Dogs array =>",dogs);

let popDog = dogs.pop();
console.log("pop Dogs =>",popDog);
console.log("pop Dogs array =>",dogs);

dogs[dogs.length] = "Poodle";
console.log(dogs.length)
console.log("Dogs =>",dogs);

let addFirst = dogs.unshift("Golden Retriever");
console.log("add first =>",addFirst);
console.log("add first Dogs =>",dogs);


let shiftDog = dogs.shift();
console.log("shiftDog  =>",shiftDog);
console.log("Dogs =>",dogs);

let addFirst1 = dogs.unshift("Golden Retriever");
console.log("Dogs =>",dogs);

dogs.splice(0,2,"Pug","Boxer","Husky");
console.log("Dogs =>",dogs);

let animals = dogs.concat(cats,birds);
console.log("animals",animals);

let newAnimal = [...dogs,...cats,...birds].toString();

console.log("new animals  ==>> ",newAnimal);

let sortDog = dogs.sort();
console.log("Sort Dogs =>",sortDog);

function sArray([a,b,c,d,e]){
  console.log("Scan:"+a+ " "+b + " " + c + " "+d +" "+ e);
}
sArray(animals);

let joinArray = animals.join("->");
console.log("join array ",joinArray);

let allAnimals;
console.log(allAnimals)

for (let animal of animals) {
  allAnimals= allAnimals + animal+" ";
}
console.log("All animals",allAnimals)

// let keyword
// console.log(x);
let x = 10;
console.log(x); // 10
// if we use let keyword the variable is a block scoped variable

function f1(){
    // console.log(c) // 30
  let c = 30;
  console.log(c) // 30
  if(c%5 == 0){
    let d = 40;
    console.log(d) // 40
     console.log(c) // 30
  }
  // console.log(d)
  // console.log(a)
  console.log(x) // 10
}

// console.log(c) //

f1();

// console.log(c) //

// ES6 => ECMA SCRIPT 6
// ES5 =>
function m1(b){
  console.log(b)
}

m1(1);


let f3 = function(c){
    console.log(c)
}

f3(3);

// ES6
// Arrow function
let f2 = (e) => {
      console.log(e)
}
f2(5);
// var keyword
// hoisting
console.log(a);
var a = 20;
console.log(a); // 20

// console.log(c);

// if we use var keyword , the variable is function scoped variable

function f1(){
  // var a = 30;
  console.log(a)
    console.log(c)
  var c = 30;
  console.log(a)
  console.log(c)
  console.log(d)
  if(c%5 == 0){
    var d = 40;
    console.log(d)
     console.log(c)
  }
  console.log(d)
}

// console.log(c)
f1();
// console.log(c)
// console.log(d)
// function f2(){
//   f1();
// console.log(c)
// }

// f2();