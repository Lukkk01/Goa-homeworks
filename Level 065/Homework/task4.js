let teacher = {
    name: 'John',
    subject: 'Chemistry',
    experience: '15 years',

    greet: function() {
        alert(`Hello, I teach ${this.subject}`)
    }
}

document.getElementById('greetBtn').onclick = function() {
    teacher.greet()
}