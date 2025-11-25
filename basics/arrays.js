const myArr = [0,1,2,3,4,5,6]
const myArr2 = new Array(2,3,5,7,11)
//two ways to declare an array

//basic methods include
//push,pop,shift,unshift,includes,indexof etc

const strArr = myArr2.join();
// console.log(strArr); //converts array to string with commas eg:- 2,3,5,7,11

console.log(myArr.slice(1,4))
console.log(myArr) //same as string's slice
console.log(myArr.splice(1,4)) //include both ranges as well as remove this subarray from original array
console.log(myArr) //original array is manipulated