let phrase =  "TABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ."
function pangram(string) {
    const regex = /[-_,.!?;0-9]/g;
    let ord = string.toLowerCase().replace(regex," ").split("").sort();
    let allLetter = []
    const finalLetter = []

for (const letter of ord) {
            if ((letter != " ")) {
                     allLetter.push(letter)
    }
}
allLetter.forEach(element => {
    if (!finalLetter.includes(element)) {
            finalLetter.push(element)
    }    
});

if (finalLetter.length != 26) {
    return false;
}
return true;
}
console.log(pangram(phrase))

//ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ
