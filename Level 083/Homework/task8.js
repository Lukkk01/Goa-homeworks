const simulateLoading = new Promise((resolve, reject) => {
    setTimeout(() => {
        const dataLoaded = true; // შეცვალეთ ეს მნიშვნელობა რათა ნახოთ ორივე შემთხვევა
        if (dataLoaded) {
            resolve('მონაცემები ჩაიტვირთა');
        } else {
            reject('მონაცემების ჩატვირთვა ვერ მოხერხდა');
        }
    }, 1500);
});

simulateLoading
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


// რეალურ ცხოვრებაში მაშინ დაგვჭირდება ეს როცა მაგალითად ვმუშაობთ API მოთხოვნებთან ან დიდი ფაილების ჩატვირთვასთან