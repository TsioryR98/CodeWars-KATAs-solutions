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

console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));