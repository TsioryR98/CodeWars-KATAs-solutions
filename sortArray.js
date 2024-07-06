/*
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/


function sortArray(array) {
    let oddIndex = [];
    let sortedOdd = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 != 0) {
            oddIndex.push(index);
            sortedOdd.push(array[index]);
        } 
    }
    let newArr = sortedOdd.sort((a,b) => a - b);
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
           array[i] == newArr[oddIndex[i]]
        }
        else {
            array[i]
        }
    }

    return array;
}
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0] )) //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]