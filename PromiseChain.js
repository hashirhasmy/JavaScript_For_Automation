function getEvenNumber(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value % 2 === 0) {
                resolve(value);
            } else {
                reject(new Error('Value is not even: ' + value));
            }
        }, delay);
    });
}

//promise chain:
getEvenNumber(4, 1000)
    .then((result) => {
        console.log('First even number:', result);
        return getEvenNumber(3, 2000);  // Chain another promise
    })
    .then((result) => {
        console.log('Second even number:', result);
    })
    .catch((error) => {
        console.error('Promise chain Error:', error.message);
    });