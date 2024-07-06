/*
You certainly can tell which is the larger number between 210 and 215.

But what about, say, 210 and 310? You know this one too.

Things tend to get a bit more complicated with both different bases and exponents: which is larger between 39 and 56?

Well, by now you have surely guessed that you have to build a function to compare powers, returning -1 if the first member is larger, 0 if they are equal, 1 otherwise; powers to compare will be provided in the [base, exponent] format:

comparePowers([2,10],[2,15])===1
comparePowers([2,10],[3,10])===1
comparePowers([2,10],[2,10])===0
comparePowers([3,9],[5,6])===-1
comparePowers([7,7],[5,8])===-1

*/

function comparePowers(n1,n2){ // n1 = [n,p]  n2 = [n,p]

    function power(arr) {
        if (arr[1] == 0) {
            return 1;
        } else if (arr[1] == 1) {
            return arr[0];
        }
        return arr[0] * power([arr[0], arr[1] - 1]);
    }

    let powerN1 = power(n1);
    let powerN2 = power(n2);

    if (powerN1 > powerN2) {
        return -1;
    } else if (powerN1 == powerN2) {
        return 0;
    }
    return 1;
}


console.log(comparePowers([2,10],[2,15])) //1
console.log(comparePowers([2,10],[3,10]));//1
console.log(comparePowers([2,10],[2,10]));//0
console.log(comparePowers([3,9],[5,6]));//-1
console.log(comparePowers([7,7],[5,8]))//-1


function comparePowers(n1, n2) {
    function power(arr) {
        if (arr[1] == 0) {
            return 1;
        } else if (arr[1] == 1) {
            return arr[0];
        }
        let result = 1;
        for (let i = 0; i < arr[1]; i++) {
            result *= arr[0];
        }
        return result;
    }

    let powerN1 = power(n1);
    let powerN2 = power(n2);

    if (powerN1 > powerN2) {
        return -1;
    } else if (powerN1 == powerN2) {
        return 0;
    }
    return 1;
}

console.log(comparePowers([79203061, 85980807], [78102526, 70542632]));