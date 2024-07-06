function spinWords(string){
    let newStr = [];
    string.split(" ").forEach(element => {
        if (element.length > 5) {
              newStr.push(element.split("").reverse().join(""));
        } else {
            newStr.push(element)
        }
    });
    return newStr.join(" ");
  }
  
  console.log(spinWords("Welcome" ));