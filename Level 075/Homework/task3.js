let form = document.querySelector('form')
let submitBtn = document.getElementById('submitBtn')

let table = document.createElement('table')
table.border = "1";
table.style.marginTop = "20px";
document.body.appendChild(table);

table.innerHTML = `
<tr>
    <th>Full Name</th>
    <th>Email</th>
    <th>Phone Number</th>
</tr>
`

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let name = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phoneNum').value;
    let newRow = container(name, email, phone);
    presentational(newRow);
    form.reset();
})

function container(name, email, phone) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    `;
    return tr;
}

function presentational(row) {
    table.appendChild(row)
}