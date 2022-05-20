// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

function solution(sequence) {
    let index = indexOfFail(sequence);
    if (index == null) return true;
    
    let tmp1 = sequence.slice(0);    
    tmp1.splice(index, 1);     
    if (indexOfFail(tmp1) == null) return true;
    console.log()
    let tmp2 = sequence.slice(0);
    tmp2.splice(index + 1, 1);
    if (indexOfFail(tmp2) == null) return true;
    
    return false;
}

function indexOfFail(sequence) {
    let index = null;
    for (let i = 0; i < sequence.length -1; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            index = i;
            break;
        }
    }
    return index;
}
