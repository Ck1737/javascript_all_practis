//Merge Two Sorted Array in Ascending 
// order by removing Duplicates
// a - b = Accending Order
// b - a = Decending Order
 
let arr1 = [1, 3, 6, 8, 5],
  arr2 = [3, 5, 7, 4, 3];
let arr3 = [...arr1, ...arr2];
arr3.sort((a, b) => a - b);
arr3 = [...new Set(arr3)];
console.log(arr3);
