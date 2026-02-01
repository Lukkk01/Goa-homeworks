const submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function () {
    const result = confirm("are you sure?")
    console.log(result);
}