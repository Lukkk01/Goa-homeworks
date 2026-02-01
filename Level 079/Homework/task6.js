const saveUser = () => {
    const name = document.getElementById('username').value;
    localStorage.setItem('userName', name);
}

const loadUser = () => {
    const savedName = localStorage.getItem('userName')
    document.getElementById('displayUser').textContent = savedName;
}

document.getElementById('saveBtn').addEventListener('click', saveUser)
document.getElementById('loadBtn').addEventListener('click', loadUser)

// arrow function-ს აქვს მოკლე სინტაქსი და უფრო კარგია პატარა კოდის დაწერაში ასევე იმიტომ არის კარგი რომ თუ ფუნქცია არ გვჭირდება ბევრჯერ გამოსაყენებლად შეგვიძლია arrow function დავწეროთ ერთჯერადად