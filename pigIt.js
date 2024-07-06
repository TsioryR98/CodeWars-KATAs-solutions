const string = "Pig latin is cool !"

function pigIt(str) {

    const eachWord = str.split(" "); // divise la phrase en plusieur string mais en array

    //cette fonction va faire un deplacement du premier char en arriere
            function reversedString(string1) {
                const arrayOfString = string1.split("");
                const removeFirst = arrayOfString.shift();
                const reverseFirst = arrayOfString.concat(removeFirst).join("");
                    return reverseFirst;  
                }    
            function add(str1) {
                const suffix = "ay";
                    return str1 + suffix;
                                }
    const eachPigIt = eachWord.map((element) => {
        
        if ((element === "!") ||
            (element === "?") ||
            (element === ".") ||
            (element === ";") || 
            (element === ",")
        ) {
            return element
        }
        return add(reversedString(element));

        }
    )
    return eachPigIt.join(" ");
}

console.log(pigIt(string))