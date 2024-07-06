let element = "stop Making spongebob Memes !"
let finalLetter = ""

function spongeMeme(string) {

    let finalLetter = ""
    for (let i = 0; i < string.length; i++) {

        if (i % 2 === 0) {
            finalLetter += string[i].toUpperCase();
        
        } else if (i % 2 != 0){
            finalLetter += string[i].toLowerCase();
        } 
    
}
return finalLetter;
}
console.log(spongeMeme("stop Making spongebob Memes !"));
