/*
Exemple d’entrée : decodeObservations([“SmXwpKz”, “meXZKi”])
Sortie attendue : “TEMPETE mXK”

Exemple d’entrée : decodeObservations(["LMepmWsAO", "kMrTpOmzIf"])
Sortie attendue : “NORMAL”

Cependant, ils apparaissent dans S1 dans
l'ordre MpmO et dans S2 dans un autre ordre MpOm. Ainsi, il n'y a pas de tempête: NORMAL.

*/
function decodeObservations(arr) {
    let strings1 = arr[0];
    let strings2 = arr[1];
    let similar1 = [];
    let similar2 = [];

    for (const letter of strings1) {
            if (strings2.split("").includes(letter)) {
                similar1.push(letter);
            }
    }
    for (const letter1 of strings2) {
            if (strings1.split("").includes(letter1)) {
                similar2.push(letter1);
            }
    }
    if (similar1.join("") == similar2.join("")) {
        return `TEMPETE ${similar1.join("")}`;   
    } else {
        return "NORMAL";
    }

} 

console.log(decodeObservations(["SmXwpKz", "meXZKi"]))
console.log(decodeObservations(["LMepmWsAO", "kMrTpOmzIf"]))