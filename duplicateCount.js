/**
 "abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text){
    let newText = text.toLowerCase().split("");
    let duplicate = newText.filter((char,index) => newText.indexOf(char) !== index)
    let count = []
    duplicate.forEach(word => {
        if (!count.includes(word)) {
            count.push(word)
        }
    });
    return count.length;
}

console.log(duplicateCount("abcde"));