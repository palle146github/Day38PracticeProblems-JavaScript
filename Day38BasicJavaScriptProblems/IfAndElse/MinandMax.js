var a = Math.floor((Math.random()*(999-100+1)+100));
var b = Math.floor((Math.random()*(999-100+1)+100));
var c = Math.floor((Math.random()*(999-100+1)+100));
console.log("Three numbers are : " + a+","+b+","+c)
function min(){
if (a <= b && a <= c)
	console.log("Smallest numbers is : " + a)
else if (b <= a && b <= c)
	console.log("Smallest numbers is : " + b)
else
	console.log("Smallest numbers is : " + c)
}
min();
function max(){
if (a >= b && a >= c)
	console.log("Largest numbers is : " + a)
else if (b >= a && b >= c)
	console.log("Largest numbers is : " + b)
else
	console.log("Largest numbers is : " + c)  
}
max();  
