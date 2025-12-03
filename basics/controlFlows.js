const value = "jan"
switch(value){
    case "jan" :
        console.log("january")
        break;
    case "feb" :
        console.log("february")
        break;
    case "mar" :
        console.log("march")
        break;
    case "apr" :
        console.log("april")
        break;
    default :
        console.log("month invalid")
        break; 
}
// if breaks are not put, all values will execute until either default is hit or break is found

//falsy values (which act as false in any conditional flow)
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values(which act as true in any conditional flow) 
//true, "0", "false", [], {}, function(){}

//nullish coalescing operators (??) 
let num;
num = 10 ?? 30;
console.log(num);
num = null ?? 88;
console.log(num);
num = undefined ?? 90;
console.log(num);

//ternary operator
//condition ? trueVal : falseVal