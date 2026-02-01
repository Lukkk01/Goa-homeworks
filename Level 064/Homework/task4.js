function checkLength() {
    let word = document.getElementById('wordInput').value
    let length = word.length

    document.getElementById("wordOut").textContent = length
}

document.getElementById('lengthBtn').onclick = checkLength