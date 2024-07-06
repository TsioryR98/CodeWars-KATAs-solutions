function reverseMiddle(array) {
    let reverse = []
    for (let index = array.length - 1 ; index >= 0; index--) {
       reverse.push(array[index])
    }
    let middle = Math.floor((array.length/2))
    if (reverse.length <= 5) {
        return reverse.slice(1,-1)
    } else {
        return reverse.slice((middle - 1),(1-middle))
    }
	
}
console.log(reverseMiddle([1, 2, 3, 4, 5,6,7]))