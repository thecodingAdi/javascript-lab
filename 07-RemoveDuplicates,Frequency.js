// ===============================
// Input
// ===============================
let arr = [2,4,1,6,1,1,1,8];


// ===============================
// 1️⃣ Brute Force (O(n²))
// ===============================
function bruteForceFreq(arr){
    let ans = [];

    for(let i=0;i<arr.length;i++){
        let freq = -1;

        for(let j=0;j<arr.length;j++){
            if(arr[i] == arr[j]) freq++;
        }

        ans[i] = freq;
    }

    console.log("Brute force →", ans.join(" "));
}


// ===============================
// 2️⃣ Using Object (Dictionary) O(n)
// ===============================
function objectFreq(arr){
    let freq = {};

    for(let x of arr){
        freq[x] = (freq[x] || 0) + 1;
    }

    console.log("Object dict →", freq);
}


// ===============================
// 3️⃣ Using Map (Best practice) O(n)
// ===============================
function mapFreq(arr){
    let map = new Map();

    for(let x of arr){
        map.set(x, (map.get(x) || 0) + 1);
    }

    console.log("Map →");
    for(let [key, value] of map){
        console.log(key, value);
    }
}


// ===============================
// Run all
// ===============================
bruteForceFreq(arr);
objectFreq(arr);
mapFreq(arr);
