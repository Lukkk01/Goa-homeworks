const password = '1234'
let user_pass = prompt('Enter Password')

while (user_pass != password) {
    user_pass = prompt('Incorrect, try again')
} 
console.log('Password correct')