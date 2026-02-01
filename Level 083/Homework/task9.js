fetch('https://jsonplaceholder.typicode.com/users')
    .then(array.forEach(element => {
        console.log(`Name: ${element.name}, Email: ${element.email}`);
    }));

// fetch არის ასინქრონული რადგან ის არ უშლის ხელს სხვა კოდის შესრულებას სანამ ის სრულდება