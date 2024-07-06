
//YoMama -> [1,2,4,6]

function vowelIndices(word) {
    let word1 = word.toLowerCase().split("");
    let count =[]
    word1.forEach((element,index) => {
        if (["a", "e", "i", "o", "u","y"].includes(element)) {
            count.push(index+1)
        } 
    });
    return count;
}

console.log(vowelIndices("mmmm"));
 