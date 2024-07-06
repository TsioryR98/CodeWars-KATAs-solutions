
/*
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

/*
    result.forEach(element => {
        if (element === " ") {
            newWord = result.map((acc,cur) => acc+ cur.toUpperCase,result[0])
        }
    return newWord
    });


    var toCamelCase = (str) => {
  let ns = "";
  if(str){
    let wordArr = str.split(/[-_]/g);
    for (let i in wordArr){
      if(i > 0){
        ns += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      }else{
        ns += wordArr[i]
      }
    }
  }else{
    return ns
  }
  return ns;
}
*/
//let result = string.replace(/[-_](\w)/g,(match,p1)=> p1.toUpperCase())

function toCamelCase(str){
    let regex =  /[-_]/g;
    if (str.length == 0 && str == "") {
        return ""
    }
    else {
    let result = str.replace(regex," ").split(" ");
    let newStr = result.map((char, index) => { 
                    if (index == 0) {
                        return char;
                    }
                    else {
                        return char.replace(char[0], char[0].toUpperCase())
                    }                                           
    }).join("")
        return newStr;
    }
}

console.log(toCamelCase("The_Stealth_Warrior"))