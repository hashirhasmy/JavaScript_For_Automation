//sync vs async behavior:

//syncronous behavior: code is executed line by line, and each line must finish before the next one starts. This can lead to blocking if a line takes a long time to execute.
//blocking behaviour for the user

console.log("This is the sync first line of code.");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("This is the sync last line of code.");

//asyncronous behavior: code can be executed without waiting for previous lines to finish. 
// This allows for non-blocking behavior, where long-running tasks can be executed in the background while other code continues to run.

console.log("This is the async first line of code.");
setTimeout(() => {
  console.log("This is the async last line of code.");
}, 2000);
console.log("This is the async middle line of code.");