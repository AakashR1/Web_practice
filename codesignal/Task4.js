//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
    max = inputArray[0]* inputArray[1];
    for(let i = 0 ; i<inputArray.length ; i++){
            
            if(inputArray.length<=2){
                Product = inputArray[i]*inputArray[i+1];
                if(Product > max){
                max = Product
                }
                continue
            }
            Product = inputArray[i]*inputArray[i-1];
            Product1 = inputArray[i]*inputArray[i+1];
            if(Product1 > max){                
                max = Product1
            }
            if(Product > max){                
                max = Product
            }
            console.log(max)
    }
    
    return max;
}
