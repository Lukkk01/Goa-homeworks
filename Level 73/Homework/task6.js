const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');

const list = document.createElement('ul');
document.body.appendChild(list);

addBtn.addEventListener('click', function() {
    const text = input.value.trim();

    if (text !== '') {
        const li = document.createElement('li');
        li.textContent = text;

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';

        delBtn.addEventListener('click', function() {
            li.remove();
        })

        li.appendChild(delBtn);

        list.appendChild(li);

        input.value = '';
    }
})