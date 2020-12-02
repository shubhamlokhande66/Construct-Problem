const prompt = require('prompt-sync')();
let number=Number(prompt("Enter number to print harmonic number :"));
    let harmonic=0
    for(let i=1;i<=number;i++){
        harmonic=harmonic+(1/i);
        console.log(i+" th Harmonic number :"+harmonic);
    }