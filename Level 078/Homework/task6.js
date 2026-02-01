const textInput = document.getElementById('textInput');
const saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', function() {
    const text = textInput.value.trim();
    if (text === '') return;
    sessionStorage.setItem('text', text);
    window.location.href = 'page2.html';
});