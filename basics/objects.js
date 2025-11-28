//singleton object
// Object.create()


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


