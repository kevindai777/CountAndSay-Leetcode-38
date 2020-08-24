//Objective is to find the literal 'saying' of an integer digit by digit
//For a more concise explanation: https://leetcode.com/problems/count-and-say/

let n = 4


//O(n) solution where n is the input
//Solution that goes digit by digit, and if a distinct digit is passed,
//we add the saying to the solution

let temp = '1'
    
for (let i = 1; i < n; i++) {
    let arr = temp.split('')
    
    //Make it empty and fill it w/ next iteration
    temp = ''
    let count = 1
    
    for (let j = 0; j < arr.length; j++) {
        //If adjacent characters don't match, add the 'saying' to the answer
        if (arr[j] != arr[j + 1]) {
            temp += count + arr[j]
            count = 1
        //Else if they do match, move to the next character and increment the count
        } else {
            count++
        }
    }
}

return temp