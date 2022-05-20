
function lonelyinteger(ar) {
    let res = ar[0];
        for (let i = 1; i < ar.length; i++){
            res = res ^ ar[i];
        }
        return res;
}
