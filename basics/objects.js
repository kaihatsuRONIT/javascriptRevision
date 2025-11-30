//singleton object
// const my_object = new Object({})

//object literal
const keySym = Symbol("0");
const my_obj = {
    name:"ronit",
    [keySym] : "key_A",
    "full name" : "ronit khanna",
    age:18,
    country:"india",
    education:["10th","12th","Btech"]

}
console.log(my_obj.age); //two ways to access any object field
console.log(my_obj["full name"]); // this way is used for special types.

my_obj.greeting = function() {
    console.log(`welcome back, ${this.name}`)
}
console.log(my_obj) //in this greeting func is not executed but its reference is given back


Object.freeze(my_obj); //this do not allow futher modification in the object

//part 2
const new_Obj = {1:"One",2:"Two",3:"Three"}
const new_Obj_2 = {9:"Nine",8:"Eight"}

// const getObject = Object.assign(new_Obj,new_Obj_2)   //one type to store different objects in single object
// const getObject = Object.assign({},new_Obj,new_Obj_2)  //store in new object
const getObject = {...new_Obj,...new_Obj_2}  //best and practical way


console.log(Object.keys(new_Obj))  //return array of all keys
console.log(Object.values(new_Obj_2))  //returns array of all values
console.log(Object.entries(new_Obj)) //return array of all entries

// const {name,age} = my_obj;  //instead of using my_obj.name, use this format
// console.log(name)
// console.log(age)