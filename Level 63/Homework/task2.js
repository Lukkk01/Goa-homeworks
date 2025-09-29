function displayText() {
    let text = document.getElementById('userInput').value;

    document.getElementById('display').textContent = text;
}

document.getElementById('showBtn').onclick = displayText 