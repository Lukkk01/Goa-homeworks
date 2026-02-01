const registerForm = document.getElementById('registerForm');
const regUsername = document.getElementById('regUsername');
const regPassword = document.getElementById('regPassword');

const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');

const welcomeText = document.getElementById('welcomeText');
const logoutBtn = document.getElementById('logoutBtn');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = regUsername.value.trim();
    const password = regPassword.value.trim();
    if (username === '' || password === '') return;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    regUsername.value = '';
    regPassword.value = '';
});

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (username === savedUsername && password === savedPassword) {
        registerForm.style.display = 'none';
        loginForm.style.display = 'none';
        welcomeText.style.display = 'block';
        welcomeText.textContent = `welcome ${username}`;
        logoutBtn.style.display = 'inline-block';
        loginUsername.value = '';
        loginPassword.value = '';
    }
});

logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    registerForm.style.display = 'block';
    loginForm.style.display = 'block';
    welcomeText.style.display = 'none';
    logoutBtn.style.display = 'none';
});