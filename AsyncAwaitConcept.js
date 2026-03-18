//async function without await
async function fetchData() {
    console.log("Fetching data...");
    return "Data fetched!"; // This will return a (resolved) promise with the value "Data fetched!"
}

// fetchData().
// then((result) => {
//     console.log(result)
// }); // This will log "Data fetched!" after the promise is resolved


//async function without await but with error:
async function fetchDataWithError() {
    console.log("Fetching data...");
    throw new Error("Failed to fetch data!"); // This will return a (rejected) promise with the error
}

// fetchDataWithError()
// .catch((error) => {
//     console.error(error); // This will log "Failed to fetch data!" when the promise is rejected
// });


//async function with a resolve and reject promises:

function fetchDataWithPromise() {
    console.log("Fetching data...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false; 
            if (success) {
                resolve("Data fetched successfully!"); // This will resolve the promise with the value "Data fetched successfully!"
            } else {
                reject(new Error("Failed to fetch data!")); // This will reject the promise with an error
            }
        }, 2000); // Simulating a delay of 2 seconds
    });
}

async function fetchDatawithPromiseInfo() {
    try {
        const result = await fetchDataWithPromise();
        console.log("result:", result);
    } catch (error) {
        console.error("error:", error);
    }
}

fetchDatawithPromiseInfo(); // This will log either "Data fetched successfully!" or "Failed to fetch data!" after 2 seconds, depending on the value of success








