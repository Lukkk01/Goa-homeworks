// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// Write Number in Expanded Form

function expandedForm(num) {
    const digits = String(num).split('');
    const result = [];

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== '0') {
            let part = digits[i];
            let zeros = digits.length - i - 1;
            let z = '';
            for (let j = 0; j < zeros; j++) {
                z += '0';
            }
            part += z;
            result.push(part);
        }
    }

    return result.join(' + ');
}