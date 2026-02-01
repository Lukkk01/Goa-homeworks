let checkbox1 = document.getElementById('val1')
let checkbox2 = document.getElementById('val2')
let button = document.getElementById('orBtn')
let resultP = document.getElementById('orOut')

button.onclick = function() {
    let value1 = checkbox1.checked
    let value2 = checkbox2.checked
    let result = value1 || value2

    resultP.textContent = `Result: ${result}`
}