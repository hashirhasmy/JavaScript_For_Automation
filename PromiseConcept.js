const randomNumberPromise = new Promise((resolve, reject) => {

    // async operation
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve(randomValue);
        } else {
            reject(new Error('Random value is too low: ' + randomValue));
        }

    }, 2000);  //delay of 2 seconds

});


randomNumberPromise
    .then((value) => {  //handler
    console.log('Promise resolved with value:', value);
    }).catch((error) => {  //handler
    console.error('Promise rejected with error:', error);
    });