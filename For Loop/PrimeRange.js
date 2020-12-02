
console.log("Enter range to print prime numbers :");
    let num1 = parseInt(prompt("Enter range of num1:"));
    let num2 = parseInt(prompt("Enter range of num2:"));
    let flag=1;
    let num=0;
    console.log("Prime numbers are in given range :");
    for(num = num1+1; num < num2; num++){
        flag = 1;
        for(i=2; i<=num/2; i++)
            if(num % i == 0){
                flag=0;
                break;
            }
        if (flag == 1)
            console.log(num);
    }   