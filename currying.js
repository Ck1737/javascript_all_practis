// function currying 
// how to sum (5)(3)(8)

const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);
sum(5)(3)(8);