let time = 0

function increaseMinutes() {
    time++;
    console.log("current minutes " + time)

    if (time === 34) {
        clearInterval(timer)
        console.log('time up')
    }
}

const timer = setInterval(increaseMinutes, 60000)

// clearinterval აჩერებს setinterval-ის მოქმედებას რადგან დრო ამოიწურა (34-ს გაუტოლდა)
// თუ დრო 340-ს გაუტოლდება ჩვენ timer-ს გადავცემთ clearinterval-ს რომ მისი მოქმედება გააჩეროს