let number = parseInt(prompt("Enter number to check palindrome or not : "));

function palindromeOrNot(number) {
    let num = number;
    let reversed = 0;
    while (num !== 0) {
        let remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num = Math.floor(num / 10);
    }
    if (number == reversed)
        console.log(number + " is a palindrome number.");
    else
        console.log(number + " is not a palindrome number.");
}
palindromeOrNot(number);
