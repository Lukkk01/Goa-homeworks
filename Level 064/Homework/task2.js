function doubleNumber() {
    let number = document.getElementById('numInput').value
    document.getElementById('numOut').textContent = number * 2
}

document.getElementById('doubleBtn').onclick = doubleNumber