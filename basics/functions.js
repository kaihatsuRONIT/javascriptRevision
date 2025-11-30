console.log(addOne(5)) //hoisting:can call this type of functions anywhere

function addOne(num) {
    return num+1;
}
const addTwo = function(num) {
    return num+2;
}

console.log(addTwo(5)) //must be called after initialization if stored in any variable

const my_obj = {
    currName:"github",
    price:999,
    greeting: function(){
        console.log(`hello ${this.currName}, welcome back !!`)
    }
}
my_obj.greeting()
my_obj.currName = "google"
my_obj.greeting()

function fun(){
    let username = "github"
    console.log(this.username) //this will log undefined because it works only in objects
    console.log(this) //this will log some info
}
fun()

// console.log(this)
// const myFun = ()=>{
//     console.log(this)
// }
// myFun() //both will print empty object as they have no global context as function above

const fun3 = (num1,num2)=> {
    return num1+num2;
}
const fun2 = (num1,num2)=>(
    //do not require explicit return statement
    num1+num2,
    num1*num2,
    {username:"github",age:99},
    20 //as it is single line return, it will only retunr last line.
)
console.log(fun2(5,6))