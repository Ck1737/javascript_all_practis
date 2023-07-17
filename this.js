// var name = "chirag";

// function myName() {
//    console.log(this.name);
// }
// myName();

//------------------

// const obj = {
//     myAge : 26,
//     myNames(){
//         console.log(this.myAge);
//     }
// }
// obj.myNames();
 

const obj = {
    myAge : 26,
    myName : () => {
        console.log(this);
    }
}
obj.myName();