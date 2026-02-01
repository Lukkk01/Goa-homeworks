function createUserRowContainer(fullName, email, phone) {
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  tdName.textContent = fullName;
  const tdEmail = document.createElement('td');
  tdEmail.textContent = email;
  const tdPhone = document.createElement('td');
  tdPhone.textContent = phone;

  tr.append(tdName, tdEmail, tdPhone);

  return tr;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function addRowToTablePresentation(rowElement) {
  const tableBody = document.getElementById('userTableBody');
  tableBody.appendChild(rowElement);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const newRow = createUserRowContainer(fullName, email, phone);


  addRowToTablePresentation(newRow);


  e.target.reset();
});
