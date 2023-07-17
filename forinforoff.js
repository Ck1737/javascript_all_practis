// For In vs For Of Loop in JavaScript

// for Off

let fname = "chirag";
for (let char of fname) {
  console.log("my character - " + char);
}
console.log("-----------------------------");

let num = [1, 2, 3, 4, 5, 6, 7, 8];
for (let n of num) {
  console.log("my Number is - " + n);
}

// For in
const object = { a: 1, b: 2, c: 3 };
object.d = 4;
for (const key of Object.keys(object)) {
  console.log(key);
}

//------------------
var friend = ["avnit", "divyesh", "hiren", "dipak"];

for(let element of friend){
    console.log(element)
}

//-------------------
var friend = ["avnit", "divyesh", "siddharth", "ketan"];

for(let element in friend){
  console.log(element)
}
