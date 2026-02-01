const form = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

const savedName = localStorage.getItem('username');
if (savedName) {
    greeting.textContent = `Hello ${savedName}`;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    if (name === '') return;

    localStorage.setItem('username', name);
    greeting.textContent = `Hello ${name}`;
    nameInput.value = '';
});