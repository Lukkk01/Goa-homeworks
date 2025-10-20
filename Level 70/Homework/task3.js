function Book(title, author, year, available) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = available;
    
    this.toggleAvailability = function() {
        this.available = !this.available;
        console.log(`${this.title} availability is: ${this.available}`);
    }
}

const book1 = new Book('Harry Potter', 'J.K. Rowling', 1997, true)
const book2 = new Book('1984', 'George Orwell', 1949, false)

console.log(book1.toggleAvailability())
console.log(book2.toggleAvailability())