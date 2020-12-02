const prompt = require('prompt-sync')();
let num=Number(prompt("Enter number to check number is prime or not :"));
    let flag=1;
    for(let i=2;i<=num/2;i++)
        if(num % i == 0){
            flag=0;
            break;
        }
    if(num == 1)
        console.log("1 is not a prime number.");
    if(flag ==0)
        console.log(num+" is not a prime number.");
    else
        console.log(num+" is a prime number.");