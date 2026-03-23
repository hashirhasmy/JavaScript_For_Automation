//Reverse number
//12345  -> 54321

function reverseNumber(num) {
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');
    return parseInt(reversedStr);
}
const number = 12345;
const reversedNumber = reverseNumber(number);
console.log(reversedNumber); // Output: 54321


function reverseNumber2(num) {
    //0-9 : same number
    if (num >= 0 && num <= 9) {
        return num;
    }

    let reversedNum = 0;
    while (num > 0) {
        const lastDigit = num % 10; // Get the last digit
        reversedNum = reversedNum * 10 + lastDigit; // Append the last digit to the reversed number
        num = Math.floor(num / 10); // Remove the last digit from the original number
    }
    return reversedNum;
}

const number2 = 12345;
const reversedNumber2 = reverseNumber2(number2);
console.log(reversedNumber2); // Output: 54321

