function plusMinus(arr) {
    const length = arr.length;
    var PositiveNum =0
    var Zero =0
    var NegetiveNum =0
    arr.forEach((element)=>{
        if(element < 0){
            NegetiveNum++;
        }
        else if(element >0){
            PositiveNum++
        }
        else{
            Zero++
        }
    });
    
    console.log((PositiveNum/length).toFixed(6))
    console.log((NegetiveNum/length).toFixed(6))
    console.log((Zero/length).toFixed(6))
}
