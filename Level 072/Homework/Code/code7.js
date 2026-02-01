'https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript'
// Square Every Digit

function squareDigits(num) {
    let result = '';
    for (const digit of String(num)) {
        result += String(Number(digit) ** 2);
    }
    return Number(result);
}