//start the coffe machine - 2 sec
//Grind cofee beans -1
//Boil water -1.5
//Pour boiling water in to a cup - 0.5
//Add ground cofee to the cup - 0.5
//stire the cofee - o.3
//enjoy your cofee

function startCoffeMachine(callback){
    console.log("Starting the coffe machine...");
    setTimeout(function(){
        console.log("Coffe machine is started");
        callback('Coffe machine is ready');
    },2000);
}


function grindCoffeBeans(callback){
    console.log("Grinding coffe beans..."); 
    setTimeout(function(){
        console.log("Coffe beans are ground");
        callback('Coffe beans are ready');
    },1000);
}

function boilWater(callback){
    console.log("Boiling water...");
    setTimeout(function(){
        console.log("Water is boiled");
        callback('Water is ready');
    },1500);
}

function pourBoilingWaterintoCup(boilWater, callback){
    console.log("Pouring boiling water into the cup...");   
    setTimeout(function(){
        console.log("Boiling water is poured into the cup");
        callback(boilWater + 'Boiling water is poured');
    },500);
}

function addGroundCoffeToCup(grindCoffeBeans, callback){
    console.log("Adding ground coffe to the cup...");
    setTimeout(function(){
        console.log("Ground coffe is added to the cup");
        callback(grindCoffeBeans + 'Ground coffe is added');
    },500);
}

function stirCoffe(cofeeInCup, callback){
    console.log("Stirring the coffe...");
    setTimeout(function(){
        console.log("Coffe is stirred");
        callback(cofeeInCup + 'Coffe is stirred');
    },300);
}

function enjoyCoffe(finalCofee){
    console.log("Enjoying your coffe..." + finalCofee);
}


//start the coffe machine
//Grind cofee beans 
//Boil water 
//Pour boiling water in to a cup 
//Add ground cofee to the cup 
//stire the cofee 
//enjoy your cofee

//callback hell:
startCoffeMachine(function(coffeMachineStatus){
    grindCoffeBeans(function(coffeBeansStatus){
        boilWater(function(waterStatus){
            pourBoilingWaterintoCup(waterStatus, function(boilingWaterStatus){
                addGroundCoffeToCup(coffeBeansStatus, function(groundCoffeStatus){
                    stirCoffe(boilingWaterStatus + ' and ' + groundCoffeStatus, function(stiredCoffeStatus){
                        enjoyCoffe(stiredCoffeStatus);
                    });
                });
            });
        });
    });
});

//callback hell with arrow functions:
startCoffeMachine((coffeMachineStatus) => {
    grindCoffeBeans((coffeBeansStatus) => {
        boilWater((waterStatus) => {
            pourBoilingWaterintoCup(waterStatus, (boilingWaterStatus) => {
                addGroundCoffeToCup(coffeBeansStatus, (groundCoffeStatus) => {
                    stirCoffe(boilingWaterStatus + ' and ' + groundCoffeStatus, (stiredCoffeStatus) => {
                        enjoyCoffe(stiredCoffeStatus);
                    });
                });
            });
        });
    });
});