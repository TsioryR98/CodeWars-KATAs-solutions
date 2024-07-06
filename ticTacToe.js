/*
[[0, 0, 1],                              [[1, 1, 1],            [[1, 2, 1],
 [0, 1, 2],                               [0, 0, 0],             [2, 1, 2],                           
 [2, 1, 0]]                               [2, 2, 0]]             [2, 1, 2]]
=>partiepasencoreterminée!             =>X a gagné!             => matcht nul!
*/

function diagSum(array) {
    let diagonal1 = [];
    let diagonal2 = [];
    let vertical1 =[];
    let vertical2 =[];
    let vertical3 = [];
    let horizontal1 =[];
    let horizontal2 =[];
    let horizontal3 =[];

    for (let i = 0; i < array.length; i++) {
        diagonal1.push(array[i][i]);
        diagonal2.push(array[i][array.length-1-i]);
        vertical1.push(array[i][0]);
        vertical2.push(array[i][0]);
        vertical3.push(array[i][0]);
        horizontal1.push(array[0][i]);
        horizontal2.push(array[1][i]);
        horizontal3.push(array[2][i]);
    }

    if ((diagonal1[0] == 1 && diagonal1[1] == 1 && diagonal1[2] == 1) ||
        (diagonal2[0] == 1 && diagonal2[1] == 1 && diagonal2[2] == 1) || 
        (vertical1[0] == 1 && vertical1[1] == 1 && vertical1[2] == 1)  ||
        (vertical2[0] == 1 && vertical2[1] == 1 && vertical2[2] == 1) ||
        (vertical3[0] == 1 && vertical3[1] == 1 && vertical3[2] == 1) ||
        (horizontal1[0] == 1 && horizontal1[1] == 1 && horizontal1[2] == 1) ||
        (horizontal2[0] == 1 && horizontal2[1] == 1 && horizontal2[2] == 1) ||
        (horizontal3[0] == 1 && horizontal3[1] == 1 && horizontal3[2] == 1)  
        ) {
        return "1 : X a gagné "
    }
    if ((diagonal1[0] == 2 && diagonal1[1] == 2 && diagonal1[2] == 2) ||
        (diagonal2[0] == 2 && diagonal2[1] == 2 && diagonal2[2] == 2) || 
        (vertical1[0] == 2 && vertical1[1] == 2 && vertical1[2] == 2)  ||
        (vertical2[0] == 2 && vertical2[1] == 2 && vertical2[2] == 2) ||
        (vertical3[0] == 2 && vertical3[1] == 2 && vertical3[2] == 2) ||
        (horizontal1[0] == 2 && horizontal1[1] == 2 && horizontal1[2] == 2) ||
        (horizontal2[0] == 2 && horizontal2[1] == 2 && horizontal2[2] == 2) ||
        (horizontal3[0] == 2 && horizontal3[1] == 2 && horizontal3[2] == 2)  
    ) {
        return "2 : 0 a gagné"
    }
    else if (diagonal1.includes(0) || 
             diagonal2.includes(0) || 
             vertical1.includes(0) ||  
             vertical2.includes(0) ||
             vertical3.includes(0) ||
             horizontal1.includes(0) || 
             horizontal2.includes(0) ||
            horizontal3.includes(0)     
    ) {
    return "-1 : Partie pas encore terminée !"
}
    return "0 : Macth nul"
}

console.log(diagSum([[1, 2, 1],
                     [1, 0, 1], 
                     [0, 2, 2]]));