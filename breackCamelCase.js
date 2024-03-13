/*
****************************
DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

let word = "camelCasing";
function solution(string) {
    let letter = string.split("");
    let newWord ="";
    if (letter.length === 0) { 
     return "";
    } else {
        for (let i = 0; i < letter.length; i++) {
            if (letter[i] === letter[i].toUpperCase()) {
                newWord += " "+letter[i];
            }
            else {
                newWord += letter [i];
            }}
    }
    return newWord;
  }

console.log(solution(word))
