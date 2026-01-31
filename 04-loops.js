console.log("Printed using FOR loop");
let result="";
for (let i = 0; i < 5; i++) {
  // code to be executed 5 times
  result+= i+" ";
}
console.log(result); 
console.log("Printed using WHILE loop");

let i = 0;
result="";
while (i < 5) {
   
  result+= i+" ";
  i++;
}
console.log(result); 

console.log("Printed using DO-WHILE loop");
let j = 0;
result = "";
do {
    result += j + " ";
    j++;
} while (j < 5);

console.log(result);
