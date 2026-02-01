const firstName = document.getElementById('fisrtname');
const lastName = document.getElementById("lastname");
const email = document.getElementById('email');
const pass = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn')
const form = document.querySelector('form')

const info = [firstName, lastName, email, pass]

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    for (let i = 0; i < info.length; i++) {
        if (info[i].value == '') {
            info[i].style.border = '3px solid red'
        } for (let i = 0; i < info.length; i++) {
            if (info[i].includes(' ')) {
                alert('Following information cannot contain spaces')
            }
        }
    }
    if (firstName.value == '') {
        firstName.style.border = '3px solid red'
    } else if (lastName.value == '') {
        lastName.style.border = '3px solid red'
    } else if (email.value == '') {
        email.style.border = '3px solid red'
    } else if (!email.value.includes('@')) {
        alert('E-mail must include "@"')
    } else if (pass.value.length < 8) {
        pass.style.border = '3px solid red'
        alert('Password must contain 8 letters')
    } else if (pass.value.length >= 8) {
        pass.style.border = '1px solid grey'
    }
})