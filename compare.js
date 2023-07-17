var array1 = [4, 8, 10, 9, 5];

var array2 = [5, 10, 8, 9, 4];

const isSame = array1.length == array2.length && 
array1.every((curElement) => {
    if(array2.indexOf(curElement) > -1){
        return (curElement = array2[array2.indexOf(curElement)]);
    }
})
console.log(isSame);
