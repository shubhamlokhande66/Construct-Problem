const prompt = require('prompt-sync')();
{
    let number=Number(prompt("Enter number to get power of 2 :"));
    for(let i=1;i<=number;i++)
        console.log("2 ^ "+i+" ="+Math.pow(2,i));
}