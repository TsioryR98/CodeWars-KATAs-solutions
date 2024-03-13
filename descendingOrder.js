
let number = 0

function descendingOrder(n){

    const array = n.toString()
    const array2 = array.split("")
    const sorted = array2.sort((a, b) => {
       if (a === "0") {
            return 0;
       } else {
       return b-a;
    }
    }
    );  

    return sorted.join("")
    };

console.log(descendingOrder(number))

