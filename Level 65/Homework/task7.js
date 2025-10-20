function cubeNumber() {
    let num = document.getElementById('numInput').value

    let cube = num * num * num

    document.getElementById("numOut").textContent = cube
}

document.getElementById('cubeBtn').onclick = cubeNumber