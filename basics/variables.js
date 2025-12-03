const personName = "ronitKhanna" //correct
let age = 21 //correct
var email = "ronit@khanna.com" //do not use because of scope issues
marks = 1100 //let or const is must 
let niche;  //correct
console.log(personName);
console.table([age,email,marks,niche]);

{
    num = 10; //this will act as VAR
    console.log(num);
}
console.log(num) //run without error