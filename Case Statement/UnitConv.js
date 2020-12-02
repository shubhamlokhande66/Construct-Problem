let givenLength=Number(prompt("Enter length to convert :"));
    let convertInto=Number(prompt("Enter 1:Ft to Inch 2:Ft to Meter 3:Inch to Ft 4:Meter to Ft for conversion:"));
    const ftToInch=1;
    const ftToM=2;
    const inToFt=3;
    const mToFt=4;

    const ft_Inch=12;
    const ft_M=0.3048;
    const inch_ft=1/12;
    const m_ft=3.28084;

    switch(convertInto){
        case ftToInch   :   console.log(givenLength+" ft ="+givenLength*ft_Inch+" inch");
                            break;
        case ftToM   :   console.log(givenLength+" ft ="+givenLength*ft_M+" m");
                            break;
        case inToFt   :   console.log(givenLength+" in ="+givenLength*inch_ft+" ft");
                            break;
        case mToFt   :   console.log(givenLength+" m ="+givenLength*m_ft+" ft");
                            break;
        default :   console.log("Wrong input");
    }