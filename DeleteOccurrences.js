/*
    assert.sameOrderedMembers(deleteNth([20,37,20,21], 1), [20,37,21])
    assert.sameOrderedMembers(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
    assert.sameOrderedMembers(deleteNth([12,39,19,39,39,19,12], 1), [12, 39, 19])

    on peut ultiser object avec des fonction qui peut parcourir tableau par exemple for each filter

*/

function deleteNth(arr,n) {
    let occurence = {};
     let result = arr.filter( number => {
        //occurence[number] = (occurence[number] || 0) + 1;
        if (occurence[number]) {
            occurence[number]++;
        } else {
            occurence[number] = 1;
        }
        return occurence[number] <= n;
    });
    return result

}

console.log(deleteNth([1,1,3,3,7,2,2,2,2],3))