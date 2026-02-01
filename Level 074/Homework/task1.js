// DOM არის HTML დოკუმენტის სტრუქტურა ობიექტებით რომელიც ბრაუზერს საშუალებას აძლევს შეცვალოს ელემენტები JS ფაილიდან

// აბრუნებს ელემენტს ID-ს მიხედვით
const secondElement = document.getElementById('element2');
console.log(secondElement.textContent);

// აბრუნებს ყველა ელემენტს იმ თეგით რომელსაც გადავცემთ
const allLi = document.getElementsByTagName('li');
console.log(allLi);

// აბრუნებს ყველა ელემენტს იმ კლასით რომელსაც გადავცემთ
const listItems = document.getElementsByClassName('listElement');
console.log(listItems);

// აბრუნებს წინა და-ძმა ელემენტს
const third = document.getElementById('element3');
console.log(third.previousElementSibling.textContent);

// აბრუნებს შემდეგ და-ძმა ელემენტს
console.log(third.nextElementSibling.textContent);

// აბრუნებს პირველ შთამომავალს (child-ს)
const list = document.getElementById('list');
console.log(list.firstChild);

// აბრუნებს ბოლო შთამომავალს
console.log(list.lastChild);

// აბრუნებს ყველა შთამომავალ კვანძს
console.log(list.childNodes)