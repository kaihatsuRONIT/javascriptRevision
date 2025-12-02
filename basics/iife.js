(function hello(name){
    console.log(`hello ${name} , welcome back`)
})("github"); //can pass arguments this way
// semicolon is important to determine when to stop the function

((name)=>{
    console.log(`Hello again, @ ${name}`)
})("github")