const form = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');
const logoutBtn = document.getElementById('logoutBtn');

const savedName = localStorage.getItem('username');
if (savedName) {
    greeting.textContent = `hello ${savedName}`;
    logoutBtn.style.display = 'inline-block';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    if (name === '') return;

    localStorage.setItem('username', name);
    greeting.textContent = `hello ${name}`;
    logoutBtn.style.display = 'inline-block';
    nameInput.value = '';
});

logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('username');
    alert('u left the website')
});