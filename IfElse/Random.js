const prompt = require('prompt-sync')();

let num1=Math.floor(Math.random() * (999 - 100 + 1)) + 100;
let num2=Math.floor(Math.random() * (999 - 100 + 1)) + 100;
let num3=Math.floor(Math.random() * (999 - 100 + 1)) + 100;
let num4=Math.floor(Math.random() * (999 - 100 + 1)) + 100;
let num5=Math.floor(Math.random() * (999 - 100 + 1)) + 100;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);

let min=999;
let max=0;

if(num1 < min)
    min=num1;
else min=min;
if(num2 < min)
    min=num2;
else min=min;   
if(num3 < min)
    min=num3;
else min=min;   
if(num4 < min)
    min=num4;
else min=min;
if(num5 < min)
    min=num5;
else min=min;

if(num1 > max)
    max=num1;
else max=max;
if(num2 > max)
    max=num2;
else max=max;
if(num3 > max)
    max=num3;
else max=max;
if(num4 > max)
    max=num4;
else max=max;
if(num5 > max)
    max=num5;
else max=max;

console.log("Min number:-" +min+" Max number:-" +max);