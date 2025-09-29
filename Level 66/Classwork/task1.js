function gimeresult() {
    let notInput1 = document.getElementById("not1");
    let notResult = document.getElementById("notres");
    let notBtn = document.getElementById("notSubmit");

    let val1 = t1.checked;
    let val2 = t2.checked;
    let output = val1 && val2;

    result.textContent = "a: " + output;
}
