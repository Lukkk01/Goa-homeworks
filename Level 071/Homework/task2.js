// push - მასივის ბოლოში ამატებს ელემენტს რომელსაც ჩვენ გადავცემთ
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits);

// pop - შლის მასივის ბოლო ელემენტს
let numbers = [1, 2, 3, 4];
numbers.pop();
console.log(numbers);

// unshift - ამატებს გადაცემულ ელემენტს მასივის დასაწყისში
let cars = ['bmw', 'mercedes'];
cars.unshift('audi');
console.log(cars);

// shift - შლის მასივის პირველ ელემენტს
let colors = ["red", "green", "blue"];
colors.shift();   
console.log(colors);

// slice - ქმნის ახალ მასივს იმ ინდექსებით რომლებსაც ჩვენ გადავცემთ
let animals = ["cat", "dog", "lion", "tiger"];
let small = animals.slice(0, 2);  

// splice - ცვლის თავდაპირველ მასივს, შლის ამატებს ან ცვლის ელემენტებს
let names = ["Lasha", "Luka", "Nino", "Gio"];
names.splice(1, 2);  
console.log('names')