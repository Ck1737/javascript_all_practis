const arr = [
    ["Zone_1","Zone_2"],
    ["Zone_3","Zone_4"],
    ["Zone_5","Zone_6"],
    ["Zone_7",["Zone_7",["Zone_7"],"Zone_8"],"Zone_8"],
];

// let flatArr = arr.reduce((accum,currVal)=>{
//     return accum.concat(currVal);
// })
console.log(arr.flat(Infinity));