const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
let result = 0
const resultTxt = document.getElementById('result')

minusBtn.addEventListener('click', function() {
    result--;
    resultTxt.textContent = result - 1;
})

plusBtn.addEventListener('click', function() {
    result++;
    resultTxt.textContent = result + 1;
})