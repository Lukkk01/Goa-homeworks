// როდესაც click მოხდება child-ზე, ჯერ child-ის listener იმუშავებს,შემდეგ ივენთი "აიწევა" parent-ზე.
document.getElementById("parent").addEventListener("click", () => {
    console.log("parent clicked (bubbling phase)");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("child clicked (bubbling phase)");
});