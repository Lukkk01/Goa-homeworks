const resultTxt = document.getElementById('result');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');

let counter = sessionStorage.getItem('counter');
if (counter === null) {
    counter = 0;
} else {
    counter = parseInt(counter);
}
resultTxt.textContent = counter;

plusBtn.addEventListener('click', function() {
    counter++;
    resultTxt.textContent = counter;
    sessionStorage.setItem('counter', counter);
});

minusBtn.addEventListener('click', function() {
    counter--;
    resultTxt.textContent = counter;
    sessionStorage.setItem('counter', counter);
});