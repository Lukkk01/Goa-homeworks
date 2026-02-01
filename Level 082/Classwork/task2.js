const numbers = [1, 2, 2, 3, 4, 5, 5, 6];
//map — ყველა რიცხვის კვადრატში აყვანა
const squared = numbers.map(num => num * num);
console.log("კვადრატში აყვანილი:", squared);

const plusFive = numbers.map(num => num + 5);
console.log("ყველას +5:", plusFive);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("ლუწი რიცხვები:", evenNumbers);

const uniqueNumbers = numbers.filter(num =>
  numbers.filter(x => x === num).length === 1
);
console.log("მხოლოდ ერთხელ გამოჩენილი რიცხვები:", uniqueNumbers);
