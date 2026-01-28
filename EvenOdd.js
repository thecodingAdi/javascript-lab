function check(n) {
    // without using % operator
    
    if(Math.floor(n/2)*2 == n) return true;
    else return false;
}
let x=98;
let y=77;
//Check 1->
if(check(x)){
console.log(x,": is Even");
}else{
    console.log(x,": is Odd");
}
//Check 2->
if(check(y)){
console.log(y,": is Even");
}else{
    console.log(y,": is Odd");
}

console.log("Output generated from pre-initillised value");
// // User input value checking
// let n=Number(prompt("Enter value to check Even or Odd"));
// if(check(n)){
// console.log(n,": is Even");
// }else{
//     console.log(n,": is Odd");
// } 
