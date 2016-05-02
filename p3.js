/*
var Numero = function() {
  var n;
  var primeFlag;

  this.setNumber = function(n) {
    this.n = n;
    this.primeFlag = true;
  }
  this.getN = function() {
    return this.n;
  }
  this.getPrimeFlag = function() {
    return this.primeFlag;
  }
  this.notPrime = function() {
    this.primeFlag = false;
  }
};
*/
var isPrime = function(n) {
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (var factor = 3; factor <= Math.sqrt(n); factor += 2)
      if (n % factor === 0) return false;

  return true;
}

function p3() {
/*
  var numbers = [];

  var i;

  for(i = 2; i <= 1000; i++) {
    var n = new Numero();
    n.setNumber(i);
    numbers.push(n);
  }

  console.log(numbers[0].getN());
  console.log(numbers[0].getPrimeFlag());

  var primes = [];

  for(i = 0; i < numbers.length; i++) {
    if (numbers[i].getPrimeFlag() === true) {
      primes.push(numbers[i].getN());
      for(var j = i+1; j < numbers.length; j++) {
        if (numbers[j].getN() % numbers[i].getN() === 0) {
          numbers[j].notPrime();
        }
      }
    }
  }

  for(i = 0; i < primes.length; i++) {
    console.log(primes[i]);
  }
*/
  var k = 600851475143;

  var largestPrimeFactor;

  for (var factor = 2; factor <= Math.sqrt(k); factor++)
    if (k % factor === 0 && isPrime(factor))
      largestPrimeFactor = factor;

  return largestPrimeFactor;


}
