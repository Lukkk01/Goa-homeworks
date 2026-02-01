const weatherIsGood = true;

const weatherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (weatherIsGood) {
            resolve('ამინდი კარგია, გასეირნება შემიძლია');
        } else {
            reject('ამინდი ცუდია, ვერ გავდივარ');
        }
    }, 2000);
});

weatherPromise
    .then(msg => console.log(msg))
    .catch(err => console.log(err));