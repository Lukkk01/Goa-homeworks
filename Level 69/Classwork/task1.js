const dataBase = [];

function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const account = {
        name: name,
        email: email,
        password: password
    };


dataBase.push(account);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}


function printData() {
    console.log("DataBase:", dataBase);
}