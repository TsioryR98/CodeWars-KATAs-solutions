/*
    moveZeros([false,1,0,1,2,0,1,3,"a"])

 */


function moveZeros(arr) {
    let zeros = []
    let others = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i])
        } else {
            others.push(arr[i])
        }
    }
    return others.concat(zeros);
  }
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))