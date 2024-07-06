//arrayDiff([1,2],[1]) == [2]   arrayDiff([1,2,2,2,3],[2]) == [1,3] It should remove all values from list a, which are present in list b keeping their order.
//(arrayDiff([1,2,3], [1,2]), [3]

function arrayDiff(a, b) {
    let diff = []
    a.forEach(element => {
        if (! b.includes(element)) {
            diff.push(element)
        }
   });
   return diff;
}  
console.log(arrayDiff([1,2,2], []));