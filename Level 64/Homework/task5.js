function calculateSum() {
    let a = Number(prompt("Enter first number:"))
    let b = Number(prompt("Enter second number:"))

    document.getElementById('calcOut').textContent = a + b
}

document.getElementById('calcBtn').onclick = calculateSum