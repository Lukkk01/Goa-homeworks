function getCity() {
    let city = prompt("Enter your city")

    document.getElementById('cityOut').textContent = city
}

document.getElementById('cityBtn').onclick = getCity