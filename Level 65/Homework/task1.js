const laptop = {
    brand: 'Lenovo loq',
    RAM: '16GB',
    price: 3800,

    turnOn: function() {
        console.log("laptop is on")
    }
}

const btn = document.getElementById('laptopBtn')

btn.onclick = function() {
    laptop.turnOn()
}

// property არის brand, ram, price ისინი არიან ობიექტის მახასიათებლები
// method არის turnOn ფუნქცია არის და მიბმულია ობიექტზე, შეასრულებს დავალებას როდესაც ღილაკს დავაკლიკებთ
// როგორ მოქმედებს ობიექტი html-ის ელემენტებზე - ღილაკის დაჭერისას გამოიძახება laptop.turnOn() ანუ ობიექტი რეაგირებს მომხმარებლის input-ზე