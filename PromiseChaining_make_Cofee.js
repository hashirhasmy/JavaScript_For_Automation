//start the coffe machine - 2 sec
//Grind cofee beans -1
//Boil water -1.5
//Pour boiling water in to a cup - 0.5
//Add ground cofee to the cup - 0.5
//stire the cofee - o.3
//enjoy your cofee


function startCoffeMachine(){
    return new Promise((resolve, reject) => {
        console.log("Starting the coffe machine...");
        setTimeout(() => {
            console.log("Coffe machine is started");
            resolve('Coffe machine is ready');
        }, 2000);
    });
}


function grindCoffeBeans(){
    return new Promise((resolve, reject) => {
        console.log("Grinding coffe beans..."); 
        setTimeout(() => {
            console.log("Coffe beans are ground");
            resolve('Coffe beans are ready');
        }, 1000);
    });
}

function boilWater(){
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");
        setTimeout(() => {
            console.log("Water is boiled");
            resolve('Water is ready');
        }, 1500);
    });
}

function pourBoilingWaterintoCup(boilWater){
    return new Promise((resolve, reject) => {
        console.log("Pouring boiling water into the cup...");   
        setTimeout(() => {
            console.log("Boiling water is poured into the cup");
            resolve(boilWater + 'Boiling water is poured');
        }, 500);
    });
}

function addGroundCoffeToCup(grindCoffeBeans){
    return new Promise((resolve, reject) => {
        console.log("Adding ground coffe to the cup...");
        setTimeout(() => {
            console.log("Ground coffe is added to the cup");
            resolve(grindCoffeBeans + 'Ground coffe is added');
        }, 500);
    });
}

function stirCoffe(cofeeInCup){
    return new Promise((resolve, reject) => {
        console.log("Stirring the coffe...");
        setTimeout(() => {
            console.log("Coffe is stirred");
            resolve(cofeeInCup + 'Coffe is stirred');
        }, 300);
    });
}

function enjoyCoffe(finalCofee){
    console.log("Enjoying your coffe..." + finalCofee);
}


//start the coffe machine - promise chainning
startCoffeMachine()
    .then((machineStatus) => {
        console.log(machineStatus);
        return grindCoffeBeans();
    })
    .then((grindStatus) => {
        console.log(grindStatus);
        return boilWater();
    })
    .then((boilStatus) => {
        console.log(boilStatus);
        return pourBoilingWaterintoCup(boilStatus);
    })
    .then((pourStatus) => {
        console.log(pourStatus);
        return addGroundCoffeToCup(pourStatus);
    })
    .then((addStatus) => {
        console.log(addStatus);
        return stirCoffe(addStatus);
    })
    .then((stirStatus) => {
        console.log(stirStatus);
        enjoyCoffe(stirStatus);
    })
    .catch((error) => {
        console.error("An error occurred: " + error);
    });