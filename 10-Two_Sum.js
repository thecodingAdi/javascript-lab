/*
What is the Two Sum problem?

You’re given:
i. an array of numbers
ii. a target number

 Goal: find two different indices such that
arr[i] + arr[j] === target

Example:
nums = [2, 7, 11, 15]
target = 9

Output:
[0, 1]   because 2 + 7 = 9
*/


function BruteTwoSum(nums,target){
    // Brute Force or Navie approch  O(n^2)
    let ans = [];
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            sum = nums[i]+nums[j];
            if(sum === target) {
                ans.push(i);
                ans.push(j);
                return ans;
            }
        }
    }
    return ans;
    
}

function BetterTwoSum(nums,target){
    // Better approach  O(nlogn) = O(nlogn) + O(n)
    nums.sort((a,b) => a-b);   // O(nlogn)

    let st=0;
    let end=nums.length - 1;

    while(st <= end){
        let sum = nums[st] + nums[end];
        if(sum === target) return [st,end];
        if(sum <  target) st++;
        else end--;
    }
    return [];
}

function OptimisedTwoSum(nums,target){
    // Optimised approach  O(n)
    const map = new Map();
    let a=0, b=0;
    for(let i=0; i<nums.length; i++){
        a = nums[i];
        b = target - a;  // target = a+b => b = target - a;
        
        if(map.has(b)){
            return [map.get(b), i];
        }
        map.set(a,i);
    }
}


let arr = [2,7,11,15];
let target = 9;

console.log("Using Brute force approch ");
let result1=BruteTwoSum(arr,target);
if(result1 != []) console.log(result1);
else console.log("There is no such elements equal to target in array");

console.log("Using Better force approch ");
let result2=BetterTwoSum(arr,target);
if(result2 != []) console.log(result2);
else console.log("There is no such elements equal to target in array")

console.log("Using Optimised force approch ");
let result3=OptimisedTwoSum(arr,target);
if(result3 != []) console.log(result3);
else console.log("There is no such elements equal to target in array");






 