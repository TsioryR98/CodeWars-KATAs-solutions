function parts_sums(ls) {
    let eachSum = [];
    eachSum.push(ls.reduce((acc, value) => (acc + value), 0));
    for (let index = 0; index < ls.length; index++) {
        let slicedArray = ls.slice(index + 1);
        console.log(slicedArray)
        eachSum.push(slicedArray.reduce((acc, value) => (acc + value), 0));
    }
    return eachSum;
}

let array = [ 12, 8, 10, 11, 20, 14 ];
console.log(parts_sums(array));  // Output: [20, 20, 19, 16, 10]
