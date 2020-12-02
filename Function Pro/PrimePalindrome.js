let number = Number(prompt("Enter the number :"));
primeOrNot(number);
palindromeOrNot(number);
function primeOrNot(number) {
    let flag = 1;
    for (let i = 2; i <= (number / 2); i++)
        if (number % i == 0) {
            flag = 0;
            break;
        }
    if (number == 1)
        console.log("1 is not a prime number.");
    if (flag == 0)
        console.log(number + " is not a prime number.");
    else
        console.log(number + " is a prime number.");
}
function palindromeOrNot(number) {
    let num = number;
    let reversed = 0;
    while (num != 0) {
        let remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num = Math.floor(num / 10);
    }
    if (number == reversed) {
        console.log(number + " is a palindrome number.");
        primeOrNot(reversed);
    }
    else
        console.log(number + " is not a palindrome number.");
}
