
//install prompt sync
//npm install prompt-sync (on the console)

const ps = require("prompt-sync");
const prompt = ps();

let age=parseInt(prompt("How old are you ?"));
console.log("You are ", age, "years old");
//console.log('You are ${age} years old');17