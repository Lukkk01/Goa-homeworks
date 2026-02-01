let numbers = [10, 20, 30, 40, 50];
console.log("საწყისი მასივი:", numbers);

// 1. pop - აშორებს ბოლო ელემენტს
let last = numbers.pop(); 
console.log("pop() - წაშლილი ელემენტი:", last); 
console.log("მასივი pop() შემდეგ:", numbers); 

// 2. shift - აშორებს პირველ ელემენტს
let first = numbers.shift(); 
console.log("shift() - წაშლილი ელემენტი:", first); 
console.log("მასივი shift() შემდეგ:", numbers); 

// 3. unshift - ამატებს ერთ ან რამდენიმე ელემენტს დასაწყისში
numbers.unshift(5, 15); 
console.log("unshift(5, 15):", numbers);

// 4. slice - ქმნის ახალ მასივს მითითებული მონაკვეთიდან 
let sliced = numbers.slice(1, 4); 
console.log("slice(1, 4):", sliced);
console.log("ორიგინალი slice შემდეგ:", numbers); 

// 5. splice
let spliced = numbers.splice(2, 2, 100, 200); 
console.log("splice(2, 2, 100, 200): წაშლილები:", spliced); 
console.log("მასივი splice შემდეგ:", numbers); 

// 6. indexOf
console.log("indexOf(100):", numbers.indexOf(100)); 

// 7. lastIndexOf
numbers.push(15); 
console.log("lastIndexOf(15):", numbers.lastIndexOf(15));

// 8. includes
console.log("includes(200):", numbers.includes(200)); 
console.log("includes(999):", numbers.includes(999));

// 9. find
let found = numbers.find(n => n > 100); 
console.log("find(n > 100):", found);

// 10. findIndex
let foundIndex = numbers.findIndex(n => n > 100); 
console.log("findIndex(n > 100):", foundIndex);
