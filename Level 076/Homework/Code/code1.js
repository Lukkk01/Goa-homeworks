// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript
// Duplicate Arguments

function solution() {
    for (let i = 0; i < arguments.length; i++) {
        for (let j = i + 1; j < arguments.length; j++) {
            if (arguments[i] === arguments[j]) {
                return true;
            }
        }
    }
    return false;
}