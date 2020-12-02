let date=Number(prompt("Enter date :"));
let month=prompt("Enter month :");

if((month.toLowerCase() === 'march' && date > 20 && date< 31)
    || month.toLowerCase() === 'april' && date > 1 && date< 30
    || month.toLowerCase() === 'may' && date > 1 && date< 31
    || month.toLowerCase() === 'june' && date > 1 && date< 20)
    console.log("True.");
else
    console.log("False.");