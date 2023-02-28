function isPalindrome(num1, num2) {
    // convert numbers to strings and reverse them
    const str1 = String(num1);
    const str2 = String(num2);
    const reversedStr1 = str1.split("").reverse().join("");
    const reversedStr2 = str2.split("").reverse().join("");
  
    // compare the reversed strings
    return reversedStr1 === str1 && reversedStr2 === str2;
  }

  const prompt = require('prompt-sync')();
  let one = prompt("Enter a first number");
  let two = prompt("Enter a second number");
  if(isPalindrome(one,two)){
    console.log("Two numbers are Palindroms");
  }
  else{
    console.log("Either one true or not a palindroms");
  }