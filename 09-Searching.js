// Linear Search
function LinearSearch(arr,target ){

    for(let i=0; i<arr.length; i++){
        if( arr[i] === target ){
            console.log(arr[i],"found at index =>",i);
            return true;
        }
}
return false;
}
// const linearSearch = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return true;
//   }
//   return false;
// };
let lin = [2,5,3,7,8,1,0,6];
let target =  0;
console.log("Linear Search in ");
console.log(lin.join(",")," Target=",target);
//Function Call   
let res = LinearSearch(lin,target);
if(!res) console.log("Target not found");

console.log();

// Binary Search
function BS(arr,target){
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + (right-left)) / 2);

        if (arr[mid] === target) {
        console.log(target, "found at index =>", mid);
        return true;
        } 
        else if (arr[mid] < target) {
        left = mid + 1; // search right half
        } 
        else {
        right = mid - 1; // search left half
        }
    }
    return false; // not found
}

let bin = [1,2,3,4,5,6,7,8,9];  // Sorted Array 
let tar = 3;
console.log("Binary Search in ");
console.log(bin.join(",")," Target=",tar);
//Function Call
let ans = BS(bin,tar);
if(!ans) console.log("Target not found");       // O U T P U T
                                                // Linear Search in 
                                                // 2,5,3,7,8,1,0,6  Target= 0
                                                // 0 found at index => 6

                                                // Binary Search in
                                                // 1,2,3,4,5,6,7,8,9  Target= 3
                                                // 3 found at index => 2

