const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");


addBtn.addEventListener("click", function() {
    const taskText = input.value.trim();

  if (taskText === "") {
    alert("გთხოვ შეიყვანო დავალება!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  list.appendChild(li);

  input.value = "";
});
