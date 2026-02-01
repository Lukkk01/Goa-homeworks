class Account {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
const accounts = [];
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const form = document.getElementById("register-form");
//////////////////////////////////////////////////////////////////////////////////////////////////////////
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const account = new Account(firstName, lastName, email, password);

    accounts.push(account);

    console.log("ახალი ანგარიში:", account);
    console.log("ყველა ანგარიში:", accounts);
});
