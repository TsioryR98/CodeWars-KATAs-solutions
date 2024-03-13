//'This is a test'), 'ThIs Is A TeSt' "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string) { 
    let newStr = string.split(" ");
    let weirds = ""
    function makeWeird(arr) {
        let finalLetter = ""
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                finalLetter += arr[i].toUpperCase();   
            } else if (i % 2 != 0){
                finalLetter += arr[i].toLowerCase();
            } 
        }
        return finalLetter;  
    }
    newStr.forEach(element => {
        weirds += makeWeird(element) + " ";
    });

    return weirds.slice(0,-1)
}
console.log(toWeirdCase('Weird string case')); 
