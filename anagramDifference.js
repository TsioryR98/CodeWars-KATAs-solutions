/*
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
*/

function anagramDifference(w1,w2){
    let commun = [];
    let dif1 = [];
    let dif2 = [];
    let dif3 =[];

    for (const letter1 of w1) {
        if ((w2.split("").includes(letter1)) && (!commun.includes(letter1)) ) 
        {
            commun.push(letter1);   
        }
        else {
            dif3.push(letter1);
        }
    }
    
    for (const letter2 of w2) {
        if ((commun.includes(letter2)) && (!dif1.includes(letter2))) {
            dif1.push(letter2);
        }
        else {
            dif2.push(letter2);
        }
        
    }
    return dif2.length + dif3.length ;
}

console.log(anagramDifference("codewars", "hackerrank"))

function anagramDifference(w1, w2) {
    let count1 = {};
    let count2 = {};

    for (let char of w1) {
        count1[char] = (count1[char] || 0) + 1;
    }

    for (let char of w2) {
        count2[char] = (count2[char] || 0) + 1;
    }

    let diff = 0;

    for (let char in count1) {
        if (!count2[char]) {
            diff += count1[char];
        } else {
            diff += Math.abs(count1[char] - count2[char]);
        }
    }

    for (let char in count2) {
        if (!count1[char]) {
            diff += count2[char];
        }
    }

    return diff;
}

console.log(anagramDifference("sxyfaruafprcdgwwriofapfvupooqnhivesxjsxw", "mvvzztxmbjnmkeydzsntjthfvhsajdejltelxpoggoauyhenapsuhhhcyzewyszawwrttnnyczzcxfdooxwwgkvvqvfjryeysimu")); // Output: 68
