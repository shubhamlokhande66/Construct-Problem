let number=Number(prompt("Enter number to get power of 2 :"));
    let i=1;
    let power_value=1;
    while(i<= number && power_value < 256){
        power_value=Math.pow(2,i)
        console.log("2 ^ "+i+" ="+power_value);
        i++;
    }