/* 
Anagram Check — Question
Given two strings, write a program to check whether they are anagrams of each other or not.
An anagram check means:
Checking whether two strings contain the same characters with the 
same frequency, but possibly in a different order.

Simple examples:
"listen" and "silent" →  anagrams
"race" and "care" → anagrams
"hello" and "world" →  not anagrams
*/

function anagram(str1, str2) {
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    return str1 === str2;
}

function Anagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const map = new Map();

    for (let i = 0; i < str1.length; i++) {  // setting all frequency of each letter in a map
        let ch = str1[i];
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1);
        }
        else map.set(ch, 1);
    }

    for (let i = 0; i < str2.length; i++) {  // using map to detect the frequency of another string
        let ch = str2[i];
        if (!map.has(ch)) return false;

        map.set(ch, map.get(ch) - 1);

        if (map.get(ch) < 0) return false;
    }
    return true;
}

let string1 = "listen";
let string2 = "silent";

console.log("1.Using Sorting method ");
console.log(anagram(string1, string2));
console.log("2.Using Map method ");
console.log(Anagram(string1, string2));

/* 
O U T P U T

1.Using Sorting method 
true
2.Using Map method
true

*/