let word = "RFsarAbi1Dt4eeh"


function decodeMessage(code,str) {
    let index = []
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (i % code === 0) {
            index.push(i)
        }  
    }
    let finalIndex = index.concat(index.map((x) => x +1)).concat(index.map((y) => y +2))
    finalIndex.forEach(indexof => {
        newStr += str[indexof]
    });
    return finalIndex;
}
console.log(decodeMessage(3,word));