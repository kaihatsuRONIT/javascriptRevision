const arr = "hello"
// for(let i  = 0;i<=arr.length;i++){
//     console.log(arr[i]); // accessing any value greater than n-1 index will result in undefined
// }

//high order loops
//***for of***

const supes = ["superman","vecna","will","eleven"]
for(const num of supes){  //works on arrays,strings,maps and gets their stored values. DOES NOT WORK ON OBJECTS
    console.log(num);  
}

//***for in ****
const numbers = {one : "1", two:"2", three:"3"}
for(const key in numbers) { //gives indexes in objects,arrays,strings but not on maps
    console.log(`index is ${key} and value is ${numbers[key]}`); //do not access with .key as it will give undefined
}

const map = new Map();
map.set("IN","Indonesia");
map.set("US","United States");
map.set("UK","United Kingdom");
map.set("EU","Europe");
map.set("IN","India")  // do not store duplicate keys but overwrites previous ones


for(const [a,b] of map) {
    //if written without [], then gets array
    //if written with [], as [a,b] then get 'a' as key and 'b' as value
    console.log(`key is ${a} and value is ${b}`);
}

