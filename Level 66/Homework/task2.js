function checkNot() {
    let checkbox = document.getElementById('notVal')

    let result = !checkbox.checked

    document.getElementById('notOut').textContent = result
}

document.getElementById("notBtn").onclick = checkNot