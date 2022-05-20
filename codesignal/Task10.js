// Given two strings, find the number of common characters between them.

function solution(s1, s2) {
    let cnt = 0;
    s1 = s1.split("");
    s2 = s2.split("");
    for(var i = 0; i<s1.length;i++){
        for(var j = 0; j<s2.length;j++){
            if(s1[i] == s2[j]){
                cnt++;
                s1.splice(i, 1);
                s2.splice(j, 1);
                i--;
                break;
            }
        }
        console.log(s1,s2);
        
        
    }
    return cnt
}
