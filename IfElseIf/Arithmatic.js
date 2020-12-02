let a= parseInt(prompt("Enter value a :"));
    let b= parseInt(prompt("Enter value b :"));
    let c= parseInt(prompt("Enter value c :"));
    
    let operation1=a+b*c;
    let operation2=a%b+c;
    let operation3=c+a/b;
    let operation4=a*b+c;

    console.log(operation1);
    console.log(operation2);
    console.log(operation3);
    console.log(operation4);
    
    let max=(operation1 > operation2 && operation1 > operation3 && operation1 > operation4) ? operation1 : (( operation2 > operation3 && operation2 > operation4) ? operation2 : (operation3 > operation4 ? operation3 : operation4));
    let min=(operation1 < operation2 && operation1 < operation3 && operation1 < operation4) ? operation1 : (( operation2 < operation3 && operation2 < operation4) ? operation2 : (operation3 < operation4 ? operation3 : operation4));
    
    console.log("Maximum value :"+max);
    console.log("Minimum value :"+min);