let numbers = [1, 2, 2, 3, 4, 5, 6, 4, 7, 8, 1, 9, 10, 'A', 'B', 'C', 'D'];

// indexOf აბრუნებს ელემენტის პირველ ინდექსს
console.log(numbers.indexOf('A'));
// თუ ვერ იპოვა აბრუნებს -1
console.log(numbers.indexOf(23));
console.log(numbers.indexOf('C'));

// lastIndexOf აბრუნებს ელემენტის ბოლო ინდექსს
console.log(numbers.lastIndexOf(10))
console.log(numbers.lastIndexOf(1))
console.log(numbers.lastIndexOf(4))

// includes ამოწმებს შეიცავს თუ არა მასივი კონკრეტულ მნიშვნელობას
console.log(numbers.includes(10))
console.log(numbers.includes('A'))
console.log(numbers.includes('D'))