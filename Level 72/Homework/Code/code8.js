'https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript'
// Jaden Casing Strings

Object.defineProperty(String.prototype, 'toJadenCase', {
    value: function() {
        return this
        .split(' ')
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
    }
});