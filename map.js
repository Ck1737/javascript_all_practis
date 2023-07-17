// const array1 = [1, 4, 9, 16, 25];
// let newArr = array1.map((curElem, index, arr) => {
//   return `index no = ${index} and the value is ${curElem} belong to ${arr}`;
// });
// console.log(newArr);

//------------------------------------------------------------

// let arr = [25, 36, 49, 64, 81];

// let square = arr.map((curElem) => Math.sqrt(curElem));

// console.log(square);

//------------------------------------------------------------

let arr = [2, 3, 4, 6, 8];

let arr2 = arr
  .map((curElem) => curElem * 2)
  .filter((curElem) => curElem > 10)
  .reduce((accumulator, curElem) => {
    return (accumulator += curElem);
  });
console.log(arr2);
