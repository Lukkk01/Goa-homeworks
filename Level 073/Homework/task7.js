let addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', function() {
    let para = document.createElement('p')
    para.textContent = Math.floor(Math.random() * 1000);
    
    document.body.appendChild(para);
})