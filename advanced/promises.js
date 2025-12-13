// const promiseOne = new Promise(function(resolve,reject){
//     //any async work
//     setTimeout(()=>{
//         console.log("hello world")
//         resolve();
//     },1000)
// })
// promiseOne.then(()=>{
//     console.log("promise one completed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let err = false;
//         if(!err){
//             console.log("something is done")
//             resolve({username: 'kaihastuRONIT', email: "kaihatsuRonit@google.com"}); //resolve is used to send the flow to then statements
//         }else{
//             reject("Error: Something went wrong")  // this sends the flow to catch statement
//         }
//     },1000)
// }).then((user)=>{
//     const username = user.username;
//     return username
// }).then((username)=>{
//     console.log("promise resolved")
//     console.log(username) //.then chaining is used to send the data linearly from one then to another using return statements
// })
// .catch((err)=>{
//     console.log(`${err}`)
// })

// //can also be done using async and await
// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err = false;
//         if(!err){
//             console.log("something is done again")
//             resolve({username: 'johndoe', email: "johndoe@google.com"});
//         }else{
//             reject("Error: Something went wrong")
//         }
//     },1000)
// })
// async function consumePromiseThree(){
//     try {  //try catch must be used to consume rejected responses
//         const response = await promiseThree;
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseThree(); //must call the async function to actually consume it (upon resolve or reject) else it will just do whatever is written before resolve or reject


async function githubApi(){
    try {
        const res = await fetch("https://api.github.com/users/kaihatsuRONIT"); //fetch returns promise
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
githubApi();