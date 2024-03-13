let array = [2,-2,4,9,-4,96,53]
let pair = []
array.forEach(element => {
    if (element % 2 === 0) {
        pair.push(Math.abs(element))
    }

});


