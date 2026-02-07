/* 
Input: n = 4

* * * *
* * * *
* * * *
* * * *

Input: n = 5

*
* *
* * *
* * * *
* * * * *

Input: n = 5

* * * * *
* * * *
* * *
* *
*

Input: n = 5

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

Input: n = 5

    *
   * *
  * * *
 * * * *
* * * * *

*/
function square() {
    let n = 4;
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += "* ";
        }
        console.log(row);
    }

    // for(let i=0; i<n; i++){    1 loop only
    //     let row = "* ".repeat(4);
    //     console.log(row);
    // }
}

function upRightTriangle() { 
    let n = 5;
    for (let i = 1; i <=n; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

function downRightTriangle() { 
    let n = 5;
    for (let i = 1; i <=n; i++) {
        let row = "";
        for (let j = n; j>=i; j--) {
            row += "* ";
        }
        console.log(row);
    }
}

function NumsUpRightTriangle() { 
    let n = 5;
    for (let i = 1; i <=n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j+" ";
        }
        console.log(row);
    }
}

function pyramid() {
    let n = 5;
    for (let i = 1; i <= n; i++) {
        let row = "";
        // spaces
        for (let j = 1; j <= n - i; j++) {
            row += "  ";
        }
        // stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "* ";
        }
        
        console.log(row);
    }
}

square();
console.log();
upRightTriangle();
console.log();
downRightTriangle();
console.log();
NumsUpRightTriangle();
console.log();
pyramid();

