function checkOrNum() {
    let a = document.getElementById('valA').value
    let b = document.getElementById('valB').value

    let result = (a < 5) || (b < 5)

    document.getElementById('orNumOut').textContent = result
}

document.getElementById('orNumBtn').onclick = checkOrNum