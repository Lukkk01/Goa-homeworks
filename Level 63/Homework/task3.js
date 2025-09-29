function getPassword() {
    let password = prompt("Enter your password")
    document.getElementById('passOut').textContent = password
}

document.getElementById('passBtn').onclick = getPassword