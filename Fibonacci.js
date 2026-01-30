console.log("Series printed not in line:");
let a=0,b=1;
let c=0;
console.log(a);
console.log(b);
for(let i=1;i<=10;i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}

console.log("Series printed in line:");
let x = 0, y = 1;
let result = [x, y];    

for (let i = 1; i <= 8; i++) {   
    let z = x + y;
    result.push(z);
    x = y;
    y = z;
}
console.log(result.join(" "));   // print in one line

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

// Print first 10 Fibonacci numbers in one line
console.log("Series printed using Function");
let Series = [];
for (let i = 0; i < 10; i++) {
    Series.push(fib(i));
}
console.log(Series.join(" "));