

let arr1 = [ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]
function findUniq(arr) {
    let toCompare = arr[0].toLowerCase().split("").sort().filter((word) => word != " ").join("");



}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))