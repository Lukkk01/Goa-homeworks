let number = Number(prompt('Enter a number'));

if (number % 3 === 0 && number % 5 === 0) {
    console.log('Fizzbuzz');
} else if (number % 3 === 0) {
    console.log('Fizz');
} else if (number % 5 === 0) {
    console.log('Buzz');
} else {
    console.log('not divisible by 5 or 3');
}