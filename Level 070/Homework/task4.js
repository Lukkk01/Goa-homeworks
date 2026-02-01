function Car(brand, model, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;

    this.drive = function() {
        this.mileage += 100;
        console.log(`${this.brand} ${this.model} drove 100 miles. Mileage: ${this.mileage}`);
    };
}

const car1 = new Car('Toyota', 'Corolla', 2018, 50000)
const car2 = new Car('Audi', "RS7", 2026, 1600)
const car3 = new Car('Porsche', 'GT 3 RS', 2023, 5200)

console.log(car1.drive())
console.log(car2.drive())
console.log(car3.drive())