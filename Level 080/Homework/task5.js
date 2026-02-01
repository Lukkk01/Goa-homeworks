// https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript
// Prefill an Array

function prefill(n, v) {
    const num = Number(n);

    if (
        !Number.isFinite(num) ||
        !Number.isInteger(num) ||
        num < 0 ||
        typeof n === 'boolean' ||
        n === null
    ) {
        throw new TypeError(n + ' is invalid');
    }

    const result = [];
    let i = 0;
    while (i < num) {
        result[i] = v;
        i++;
    }

    return result;
}