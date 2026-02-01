const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const listItems = document.querySelectorAll('#list li');

searchBtn.addEventListener('click', function() {
    const text = searchInput.value;

    for (let i = 0; i < listItems.length; i++) {
        const itemText = listItems[i].textContent.toLowerCase();

        if (itemText.includes(text)) {
            listItems[i].style.display = 'list-item';
        } else {
            listItems[i].style.display = 'none'
        }
    }
})