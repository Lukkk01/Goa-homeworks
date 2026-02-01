let numBtn = document.getElementById('numBtn')
let numOut = document.getElementById('numOut')

numBtn.addEventListener('click', function() {
    numOut.textContent = Math.floor(Math.random() * 1000) + 1
})