let smile = [':)',':(',':D',':O',':;'];
function countSmiley(array1) {
   
    var count = [];
    function verify(string) {
        let validSmiley = ""
    
            if (string.length === 2) {
                if ([";", ":"].includes(string[0]) && [")", "D"].includes(string[1])) {
                    return validSmiley = string;
                }
            } else if (string.length === 3) {
                if ([";", ":"].includes(string[0]) &&
                    ["-", "~"].includes(string[1]) &&
                    [")", "D"].includes(string[2])) {
                    return validSmiley = string
                }
            }; 
        return validSmiley;
    }
    array1.forEach(element => {
        if (verify(element)) {
            count.push(element)
        }
    });
    return count;
}

console.log(countSmiley(smile));


