// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

function solution(n) {
    n = JSON.stringify(n);
    n = n.split("");
    let fromPartition  = (n.length)/2 -1;
    let FirstHalf = []
    let SecondHalf = []
    for(let i = 0;i<n.length ; i++){
        if(i<=fromPartition){
            FirstHalf.push(n[i])
        }
        else{
            SecondHalf.push(n[i]);
        }
    }
    let SumOfFirstHalf = 0;
     for(let i = 0;i<FirstHalf.length ; i++){
         SumOfFirstHalf += Number(FirstHalf[i])
    }
    let SumOfSecondHalf = 0;
     for(let i = 0;i<SecondHalf.length ; i++){
         SumOfSecondHalf += Number(SecondHalf[i])
    }
    if(SumOfFirstHalf === SumOfSecondHalf){
        return true
    }
    else{
        return false
    }
}
