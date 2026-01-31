// ===============================
// ARRAY PRACTICE PLAYGROUND
// ===============================

console.log("===== CREATE ARRAY =====");

let arr = [10, 20, 30, 40, 50];
console.log("Original:", arr);


// ===============================
// PUSH / POP
// ===============================

arr.push(60); // add end
console.log("push(60):", arr);

arr.pop(); // remove end
console.log("pop():", arr);


// ===============================
// UNSHIFT / SHIFT
// ===============================

arr.unshift(5); // add start
console.log("unshift(5):", arr);

arr.shift(); // remove start
console.log("shift():", arr);


// ===============================
// SLICE (copy part)
// ===============================

let part = arr.slice(1, 4);
console.log("slice(1,4):", part);
console.log("Original still same:", arr);


// ===============================
// SPLICE (modify original)
// ===============================

// remove 2 elements from index 1
arr.splice(1, 2);
console.log("splice remove:", arr);

// insert values
arr.splice(1, 0, 99, 88);
console.log("splice insert:", arr);

// replace
arr.splice(1, 1, 100);
console.log("splice replace:", arr);


// ===============================
// SEARCH METHODS
// ===============================

console.log("indexOf 40:", arr.indexOf(40));
console.log("includes 100:", arr.includes(100));


// ===============================
// MAP
// ===============================

let doubled = arr.map(x => x * 2);
console.log("map (double):", doubled);


// ===============================
// FILTER
// ===============================

let big = arr.filter(x => x > 30);  // arr.filter(x => x>100);
console.log("filter (>30):", big);


// ===============================
// REDUCE
// ===============================

let sum = arr.reduce((a, b) => a + b, 0);
console.log("reduce sum:", sum);

let arr2=[2,4,10];
let prod = arr2.reduce((a, b) => a*b, 1);
console.log("reduce product:", prod);

// ===============================
// Max, Min
// ===============================
let maximum =arr2.reduce((max, x) => Math.max(max, x));
console.log("Max num:", maximum);

let minimum =arr2.reduce((min, x) => Math.min(min, x));
console.log("Min num:", minimum);


// ===============================
// FOREACH
// ===============================

console.log("forEach:");
arr.forEach(x => console.log(x));


// ===============================
// SORT / REVERSE
// ===============================

let nums = [5, 1, 9, 2];

nums.sort((a, b) => a - b);
console.log("sort:", nums);

nums.reverse();
console.log("reverse:", nums);


// ===============================
// JOIN
// ===============================

console.log("join:", arr.join("-"));


// ===============================
// FINAL
// ===============================

console.log("Final array:", arr);


