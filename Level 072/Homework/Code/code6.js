'https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript'
// Reverse words

function reverseWords(str) {
    return str
        .split(' ')
        .map(function(word) {
            return word.split('').reverse().join('');
        })
        .join(' ');
}