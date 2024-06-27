//program to sum values in an array

const ps=require("prompt-sync");
const prompt=ps();

var arrayz = [];
var x = parseInt(prompt("How many number do you want to store: "));

var i;
var sum = 0;
for(i=1; i<=x; i++)
    {
        arrayz[i]=parseInt(prompt(`Supply value ${i}: `));
        sum += arrayz[i];
    }
console.log("The sum of the value is: ", sum);

for(i=1; i<=x; i++)
    {
        console.log(arrayz[i]);
    }