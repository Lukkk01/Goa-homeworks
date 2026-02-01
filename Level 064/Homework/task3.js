function compareNumbers() {
    let firstNumber = Number(prompt('Enter first number:'))
    let secondNumber = Number(prompt('Enter second number'))

    let bigger = firstNumber
    if(firstNumber > secondNumber) bigger = firstNumber
    if(secondNumber > firstNumber) bigger = secondNumber

    document.getElementById('compOut').textContent = bigger
}

document.getElementById('compBtn').onclick = compareNumbers