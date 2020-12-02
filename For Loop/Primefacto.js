let number = parseInt(prompt("Enter number to find its prime factors:"));
    let count = 0;
    let flag = 1;
    for(let i=2; i<number; i++){
        if(number % i == 0){
            flag=1;
            for(let j=2; j<=i/2; j++){
                if(i % j == 0){
                    flag = 0;
                    break;
                }
            }
            if (flag == 1){
                console.log("Prime factor :"+i);
                count = 1;
            }
        }
    }
    if(count == 0)
        console.log("No prime factors..");