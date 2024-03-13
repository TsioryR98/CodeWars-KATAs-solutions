function countVowel(string) {
    let char = string.split("");
    let count = 0;
    char.forEach(element => {
     if (["a", "e", "i", "o", "u"].includes(element)) {
       count++
     } });
     return count;
 }
 
 console.log(countVowel("invincible"))