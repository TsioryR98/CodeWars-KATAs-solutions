                                        function partsSums(ls) {
    let finalSum = [];
        function eachArray(ls) {
            let newArray =[]
            let i = ls.length
            while (i >= 0 ) {
                newArray.push(ls.slice(i,ls.length))
                    i --
        }
        return newArray;    // eachArray(ls)
        }

        function sums(array1) {
            const eachSums = array1.reduce((acc,value) => acc + value, 0)
            return eachSums;
        }
      
    eachArray(ls).forEach(element => {
        finalSum.push(sums(element))
    });

     return finalSum.reverse();

}

console.log(Number.MAX_SAFE_INTEGER +1 == Number.MAX_SAFE_INTEGER + 2)