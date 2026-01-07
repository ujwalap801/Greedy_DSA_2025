/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let n = digits.length;
    for(let i= n-1; i>=0;i--)
    {
        if(digits[i] <9)
        {
            digits[i]++;
            return digits;
        }

        digits[i] =0;
    }

    digits.unshift(1);

    return digits;
    
};



// Normal 
const numbers = [1, 2, 3, 4];
const numString = numbers.join("");
let newWord = Number(numString) + 1;
console.log(typeof newWord)

const result = String(newWord).split("").map(Number);
console.log(result);