// Given the string, check if it is a palindrome.
function solution(inputString) {
    const reversString = reverseString(inputString) ;
    if(reversString === inputString){
        return true
    }
    return false
}

function reverseString(inputString){
    let arr = inputString.split("");
    reverseArr = arr.reverse()
    return reverseArr.join("");
}