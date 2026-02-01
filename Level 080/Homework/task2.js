// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function sumDigPow(a, b) {
    const result = [];

    for (let num = a; num <= b; num++) {
        const digits = String(num).split('').map(Number);

        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += digits[i] ** (i + 1);
        }

        if (sum === num) {
            result.push(num);
        }
    }

    return result;
}