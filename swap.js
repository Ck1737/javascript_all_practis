// Array Destructuring
let arr = [1, 2, 34, 5, 6, 7, 8];
let [arr1, arr2, ...arr3] = arr;
console.log(arr1, arr2, arr3);

// Swap to Value
let num1 = 50;
let num2 = 60;
[num1, num2] = [num2, num1];
console.log(num1, num2);

//-------------
//swap value without using third variable

var a = 10;
var b = 20;

var a = a+b; //10 + 20 = 30
    b = a-b; //30 - 20 = 10
    a = a-b; //30 - 10 = 20

    console.log("value of A = ",a);
    console.log("value of B = ",b);
