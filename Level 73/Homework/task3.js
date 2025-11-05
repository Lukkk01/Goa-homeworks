let time = 10;

function countdown() {
    console.log(time);
    time--;
}

if (time < 0) {
    clearInterval(time);
    console.log('time up')
}

setInterval(countdown, 1000);

// clearInterval - ფუნქცია რომელიც აჩერებს setInterval-ის მოქმედებას