// function to check if a number is prime
function isPrime(n) {
    if (n < 2) return false; // 0, 1 are not prime
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  // function to get the palindrome of a number
  function getPalindrome(n) {
    return parseInt(n.toString().split("").reverse().join(""));
  }
  
  // main function to check if the number and its palindrome are both prime
  function checkPrimeAndPalindrome(n) {
    if (isPrime(n)) {
      const palindrome = getPalindrome(n);
      if (isPrime(palindrome)) {
        console.log(n + " is a prime number and its palindrome " + palindrome + " is also prime.");
      } else {
        console.log(n + " is a prime number but its palindrome " + palindrome + " is not prime.");
      }
    } else {
      console.log(n + " is not a prime number.");
    }
  }
  
  // example usage
  checkPrimeAndPalindrome(17); // 17 is a prime number and its palindrome 71 is also prime.
  checkPrimeAndPalindrome(23); // 23 is a prime number but its palindrome 32 is not prime.
  checkPrimeAndPalindrome(8); // 8 is not a prime number.