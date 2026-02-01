function checkBirthYear() {
    let birthYear = document.getElementById('yearInput').value

    let currentYear = 2025

    let age = currentYear - birthYear

    let msg = document.getElementById('ageMsg')

    if (age < 18) {
        msg.textContent = "Minor"
    } else {
        msg.textContent = 'Adult'
    }
}

document.getElementById('yearBtn').onclick = checkBirthYear