const myArr = [0,1,2,3,4,5,6]
const myArr2 = new Array(2,3,5,7,11)
//two ways to declare an array

//basic methods include
//push,pop,shift,unshift,includes,indexof etc

const strArr = myArr2.join();
// console.log(strArr); //converts array to string with commas eg:- 2,3,5,7,11

// console.log(myArr.slice(1,4))
// console.log(myArr) //same as string's slice
// console.log(myArr.splice(1,4)) //include both ranges as well as remove this subarray from original array
// console.log(myArr) //original array is manipulated

const my_arr = [1,2,3];
const my_arr_2 = [9,8,7];
const my_arr_3 = [1,2,3,[4,5,6,[7,8,9],10],11]
const scoreA = 10;
const scoreB = 20;
console.log([...my_arr,...my_arr_2]) //concat method can only use one array or array of arrays, but this is simpler
console.log(my_arr_3.flat(Infinity)) //flattens the array but give actual depth only

console.log(Array.isArray("GITHUB")) //return T/F
console.log(Array.from("NEWGITHUB")); //converts to array(important)
console.log(Array.from({age:21})); //return [] as specific info is not given about which parameter to be used to create array

console.log(Array.of(scoreA,scoreB,{name:"leetcode"},my_arr)) //whatever you pass stored as it is in array(whether object,string,array etc)