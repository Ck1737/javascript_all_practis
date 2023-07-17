let arr = [1, 2, 56, 78, 9, 6, 4, 1];

const getSmallestArrElemnt = () => {
    let smallNum = Number.POSITIVE_INFINITY;
    for(const num of arr){
        if(num < smallNum){
            smallNum = num;
        }
    }return smallNum;
};
const data = getSmallestArrElemnt(arr);
console.log(data);

//-----------------------

const small = (arr) => arr.reduce((smallNum, num) => Math.min(smallNum, num));
const large = (arr) => arr.reduce((smallNum, num) => Math.max(smallNum, num));
const arr1 = [56, 78, 9, 6, 4];
console.log(small(arr1));
console.log(large(arr1));
