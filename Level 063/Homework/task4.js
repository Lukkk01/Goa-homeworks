function showAge() {
    let age = document.getElementById('ageInput').value;
    document.getElementById('ageOut').textContent = age
}

document.getElementById('ageBtn').onclick = showAge