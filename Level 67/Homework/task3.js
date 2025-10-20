let submitBtn = document.getElementById('submitBtn')

submitBtn.onclick = function() {
    let firstName = document.getElementById('firstName').value
    let email = document.getElementById('email').value
    let password = document.getElementById('pass').value
    let confirmPass = document.getElementById('confirmPass').value

    if (firstName === '' || email === '' || password === '' || confirmPass === '') {
        alert('please fill in the form')
    } else if (password.length < 8) {
        alert('password must be 8 or more characters')
    } else if (password != confirmPass) {
        alert('passwords dont match')
    } else if (!email.includes('@') || !email.includes('.')) {
        alert('please enter a valid email')
    } else {
        alert('sign in successful')
    }
}