/*
"Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
generateHashtag (str)

}

function generateHashtag (str) {
    let stringArray = str.split(" ").filter((x) => x !== "").map((y) => y.replace(y[0], y[0].toUpperCase()));
    let result = ["#", ...stringArray].join("");
    if ((result.length > 140) || (result === "#")) {
        return false;
    } else {
        return result;
    }
}
*/

function generateHashtag(str) {
    if (str.trim() === "" || str === "") { //str.trim() va supprimer les espaces en début et en fin de chaîne
        return false;
    }
    let newStr = []

    let arr = str.split(" ")
    if (arr.length === 1 && arr[0] === "") {
        return false;
    }

    arr.forEach((element) => {
        for (let index = 0; index < element.length; index++) {
            if (index == 0) {
                newStr.push(element[index].toUpperCase());
            } 
            else {
                newStr.push(element[index].toLowerCase());
            }}//newWord += index === 0 ? word[index].toUpperCase() : word[index].toLowerCase();
        
    });
    let hashtag = "#"+ newStr.join("");
    if (hashtag.length <= 140 && str.length != 0) {
        return hashtag;
    } else {
        return false;
    }
       
}
console.log(generateHashtag(""));

