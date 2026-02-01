let submitBtn = document.getElementById('submitBtn')

submitBtn.onclick = function() {
    let firstName = document.getElementById('firstName').value
    let email = document.getElementById('email').value
    let password = document.getElementById('pass').value

    if (firstName === '' || email === '' || password === '') {
        alert("please fill in the form")
    } else {
        alert("sign in successful")
    }
}