/*

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str){
   let newStr = ""
   for (let index = 0; index < str.length; index++) {
        if (index % 2 != 0) {
            newStr += str[index] + " "
        } else {
            newStr += str[index]
        }
   }
   //return newStr.trim().split(" "); [ 'ab', 'cd', 'e' ]

   if (newStr.length > 1) {
    let final = newStr.trim().split(" ").map((word) => {
        if (word.length == 2) {
            return word;
        } else {
            return word+"_";
        }
    })
    return final;
   } 
   return [];

}

console.log(solution(""))