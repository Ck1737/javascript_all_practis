// Prime or Not

let num = 10;
var isPrimeNumber = true;

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrimeNumber = false;
  }
}

if (isPrimeNumber == true) {
  console.log(`${num} is a prime Number`);
} else {
  console.log(`${num} is not a prime number`);
}

// prime Number - 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
