function checkAnd() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    let result = (num1 > 10) && (num2 > 10)
    
    document.getElementById('andOut').textContent = result
}

document.getElementById('andBtn').onclick = checkAnd