//case : 1
//f1 -- resolve
//f2 -- resolve
//f3 -- resolve

const function1 = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("Data from function 1");
            const data = [1,2,3,4,5];
            resolve(data);
        }, 2000);
    });
};

const function2 = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("Data from function 2");
            const data = [6,7,8,9,10];
            resolve(data);
        }, 2000);
    });
};

const function3 = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("Data from function 3");
            const data = [11,12,13,14,15];
            resolve(data);
        }, 2000);
    });
};

Promise.all([function1(), function2(), function3()])
    .then((dataArray) => {
        console.log("All data from diff arrays : " , dataArray); // [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]]
    })
    .catch((error) => {
        console.error(error);
    });


//case : 2
//f1 -- resolve
//f2 -- reject


const getData1 = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from getData");
        }, 2000);
    });
};

const getError = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error from getError");
        }, 2000);
    });
};

Promise.all([getData1(), getError()])
    .then((dataArray) => {
        console.log("All data from diff arrays : " , dataArray);
    })
    .catch((error) => {
        console.error("Error : ", error); // Error :  Error from getError
    });