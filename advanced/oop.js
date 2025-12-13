//it is a prototype based language and all the above on that is just syntactical sugar

function User(username,password,email){
    this.username = username;
    this.password = password;
    this.email = email
    return this // as this is an empty object in current context
    //return statemnt is redundant as it by default returns the this object
}

const userA = new User("john doe","1@3$5","johndoe@google.com")
const userB = new User("nhoj eod","!2#4%","nhojeod@micosoft.com")  //overwrites the current object(this) so NEW keyword must be used to prevent overwriting
console.log(userA)
console.log(userB)