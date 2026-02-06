//Method overloading concept not there in js

function print(){
    console.log("No arguments provided.");
}

print(); // This will print: Printing two values: undefined and undefined

function print(value){
    console.log("Printing value: " + value);
}

function print(value1, value2){
    console.log("Printing two values: " + value1 + " and " + value2);
}


//print(); // This will print: Printing two values: undefined and undefined

//Exaplle2
//run test case on remote machine:
//browserName, browserVersion, remoteExecution

function runTestCase(browserName, browserVersion, remoteExecution){
    if(browserName !== undefined && browserVersion !== undefined && remoteExecution !== undefined){
        console.log("Running test on " + browserName + " version " + browserVersion + " with remote execution: " + remoteExecution);
    } else if(browserName !== undefined && browserVersion !== undefined){
        console.log("Running test on " + browserName + " version " + browserVersion + " with local execution.");
    } else if(browserName !== undefined){
        console.log("Running test on " + browserName + " with default version and local execution.");
    } else {
        console.log("Running test on default browser with default version and local execution.");
    }
}

runTestCase("Chrome", "90.0", true);
runTestCase("Firefox", "88.0");
runTestCase("Safari");
runTestCase();