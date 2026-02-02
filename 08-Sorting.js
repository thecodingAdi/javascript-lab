let arr = [30,20,10,60,40,50,70];
let n = arr.length;
// ===============================
// Bubble Sort => O(n*n)
// ===============================

for(let i=0; i<n-1; i++){
    for(let j=0; j<n-1-i; j++){
        if(arr[j] > arr[j+1]){
            // Swap elements
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
        } 
    }
}

console.log(arr.join(","));   // O U T P U T => 10,20,30,40,50,60,70

// ===============================
// Selection Sort => O(n*n)
// ===============================

for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }
    // swap only single time in per pass
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}

console.log(arr.join(","));   // O U T P U T => 10,20,30,40,50,60,70

// ===============================
// Insertion Sort => O(n*n)
// ===============================

for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; // shift right
        j--;
    }
    arr[j + 1] = key; // insert at correct position
}

console.log(arr.join(","));   // O U T P U T => 10,20,30,40,50,60,70

// Bubble Sort:
// “Used mainly for educational purposes due to simplicity.”

// Selection Sort:
// “Used when the number of swaps needs to be minimized.”

// Insertion Sort:
// “Efficient for small or nearly sorted datasets.”