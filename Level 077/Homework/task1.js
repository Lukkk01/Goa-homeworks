// addEventListener - დაამატე მოვლენის მსმენელი ანუ როდესაც ჩვენ რომელიმე ელემენტს დავუმატებთ რომელიმე მოვლენის მსმენელს, როდესაც მოვლენა მოხდება addeventlistener-ში დაწერილი ფუნქცია შესრულდება
// submit ზე დაჭერისას გვერდი ახლიდან იტვირთება რადგან ეს ფორმის default ქცევაა როდესაც მონაცემებს სერვერთან აგზავნის და ეს რომ თავიდან ავირიდოთ უნდა გამოვიყენოთ preventdefault

let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('name submitted')
})

// ფორმა არ ჩაიტვირთება ახლიდან და რაც ჩავწერეთ ისევ იქ იქნება