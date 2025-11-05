function secPassed() {
    console.log('1 second passed')
}

setTimeout(secPassed, 1000);

// setTimeout - ფუნქციას იმეორებს ერთხელ გარკვეული დროის შუალედის შემდეგ ხოლო setInterval ბევრჯერ იმეორებს ყოველი დროის ტოლ შუალედში (რამდენსაც გადავცემთ)