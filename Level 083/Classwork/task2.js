let promiseStatus = "pending";

const myPromise = new Promise((resolve, reject) => {

    let internetRequest = true;

    setTimeout(() => {

        if (internetRequest) {
            promiseStatus = "fulfilled";
            resolve("Internet request successful!");
        } else {
            promiseStatus = "rejected";
            reject("Internet request failed!");
        }

    }, 3000);
});


const intervalId = setInterval(() => {

    console.log("Promise status:", promiseStatus);

    if (promiseStatus !== "pending") {
        clearInterval(intervalId);
    }

}, 500);


myPromise
    .then(result => console.log("RESULT:", result))
    .catch(error => console.log("ERROR:", error));
