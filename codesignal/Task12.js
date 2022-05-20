// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

function solution(a) {
    let positiveArray = [];
    let NegativeValueIndex = [];
    let NegativeValue = []
    a.forEach((element,index)=>{
        if(element>=0){
            positiveArray.push(element);
        }
        else{
            NegativeValueIndex.push(index);
            NegativeValue.push(element);
        }
    })
    positiveArray = positiveArray.sort((a,b)=>{
        return a-b
    });
    
    for(let i = 0 ; i < NegativeValue.length ; i++){
        positiveArray.splice(NegativeValueIndex[i], 0,NegativeValue[i] );
    }
    return positiveArray
}
