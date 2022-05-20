// Given an array of strings, return another array containing all of its longest strings.

function solution(inputArray) {
    let longestStringLength = 0;
    inputArray.forEach((element)=>{
        if(element.length > longestStringLength){
            longestStringLength = element.length
        }
    })
    let arr = [];
    inputArray.filter((element)=>{
        if(element.length == longestStringLength){
            arr.push(element)
        }
    })
    return arr
}
