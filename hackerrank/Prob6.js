
function countingSort(arr,n) {

    let newArrLength = Math.max(...arr)
    
    let newArr = [];
    for(let i = 0; i<=newArrLength; i++ ){
        newArr.push(0);
    }
    arr.forEach((element)=>{
        newArr[element] = newArr[element]+1;
    })
    return newArr
}

function processData(input) {
    var lines = input.split('\n'),
        len = parseInt(lines[0], 10);

    lines = lines[1].split(" ");

    var A = Array.apply(null, new Array(100)).map(Number.prototype.valueOf, 0);

    for (var i=0; i<len; i++) {
        A[parseInt(lines[i], 10)]++;
    }

    console.log(A.join(" "));
}
