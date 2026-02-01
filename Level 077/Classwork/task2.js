const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const limit = 200;

textarea.addEventListener('keydown', () => {
  setTimeout(() => {
    const length = textarea.value.length;
    counter.textContent = `${length} / ${limit} სიმბოლო`;

    if (length > limit) {
      counter.style.color = 'red';
    } else {
      counter.style.color = 'green';
    }
  });
});
