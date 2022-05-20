
function miniMaxSum(arr) {
    let max = 0; 
    let min = arr[0];
    let maxIndex = 0;
    let minIndex = 0;
    arr.forEach((elemetn,index)=>{
        if(elemetn<min){
            min = elemetn
            maxIndex = index
        }
        if(elemetn>max){
            max = elemetn;
            minIndex = index
        }
    })
    let minSum= 0 ,maxSum = 0
    arr.forEach((elemetn,index)=>{
        if(index !== maxIndex){
            maxSum +=elemetn 
        }       
        if(index !== minIndex){
            minSum +=elemetn 
        }
    })
    console.log(minSum,maxSum);
}


