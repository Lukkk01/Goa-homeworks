const numbers = []

for (let i = 0; i < 10; i++) {
    let type;

    if (i % 2 == 0) {
        type = 'ლუწი'
    } else {
        type = 'კენტი'
    }

    const numObject = {
        value: i,
        type: type
    }
    numbers.push(numObject)
}

console.log(numbers)