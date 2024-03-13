//isBearable(10,[2,6,3,2,1])


function isBearable(n,arr) {
    let sum = arr.reduce((acc,value) => acc + value ,0);
    if (sum > n ) {
        return false;
    } else {
       return true;
    }
}
console.log(isBearable(10,[2,1,3,2,1]))