let number=Number(prompt("Enter any number(1,10,100,..,100000):"));
    switch(number){
        case 1  :  console.log("Unit");
                    break; 
        case 10  :  console.log("Ten");
                    break; 
        case 100  :  console.log("Hundread");
                    break; 
        case 1000  :  console.log("Thousand");
                    break; 
        case 10000  :  console.log("Ten thousand");
                    break; 
        case 100000  :  console.log("Lakh");
                    break; 
        default :   console.log("Wrong input");
    }