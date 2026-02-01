const taskInput = document.getElementById('task');
const list = document.getElementById('list');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function() {
    const task = taskInput.value;
    if (task.trim() === '') return;

    const li = document.createElement('li');
    li.innerHTML = `${task} <button class="doneBtn">Done</button>`;
    list.appendChild(li);
    taskInput.value = '';

    const doneBtn = li.querySelector('.doneBtn');
    doneBtn.addEventListener('click', function() {
        this.parentElement.style.textDecoration = 'line-through';
    });
});