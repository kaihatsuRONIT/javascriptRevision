const name = "her-oku"  //typeof = string
const newName = new String("kaizoku") //typeof = object

//but even though it is an object, its values cannot be changed
//however, both the ways can utilize string functions of __proto__

// console.log(name.toUpperCase());
// console.log(newName.toUpperCase());

// console.log(newName.slice(-6,-2)) //index can be negative as well in slice and works same as substring
// console.log(newName.concat(" Oni"))

// console.log("    999     ".trim())

const url = "https://www.github.com/";
console.log(url.replace("%20","")) //replace any string with any
console.log(url.includes("Ronit")) //this is case sensitive
console.log(url.concat(["Kaihatsu","RONIT"]).replace(",",""))

console.log(url.split("/"))

console.log(name.valueOf())

const str = "hello world"
console.log(str[3]); //can access any char through index


