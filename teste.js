/*
 assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
    assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
    assert.strictEqual(order(""), "", "empty input should return empty string" )

*/
/*

const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?".split('');

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();

var letters = T.toUpperCase().split('');

let alphabetMap = {};
alphabetArray.forEach(letter => {
  alphabetMap[letter] = [];
});


for (let i = 0; i < H; i++) {
    const ROW = readline();
    for (let j = 0; j < alphabetArray.length; j++) {
      alphabetMap[alphabetArray[j]][i] = ROW.slice(j*L, j*L + L);

    }
}

// Write an action using console.log()
// To debug: console.error('Debug messages...');

// write

var answer = "";
for (let k = 0; k < H; k++) {
    for (let c = 0; c < letters.length; c++) {
        var thisLetter = letters[c];
        if ((thisLetter < 'A') || ('Z' < thisLetter)) {
            thisLetter = '?';
        }
        answer += alphabetMap[thisLetter][k];
    }
    answer += '\n';
}



console.log(answer);
*/

/*********************************************/


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const alphabetArrays = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?".split('');

rl.question('Entrez la longueur L : ', (L) => {
  rl.question('Entrez la hauteur H : ', (H) => {
    rl.question('Entrez la chaîne T : ', (T) => {
      const letters = T.toUpperCase().split('');

      let alphabetMap = {};
      alphabetArrays.forEach(letter => {
        alphabetMap[letter] = [];
      });

      const readRowsAndUpdateMap = (rowIndex) => {
        if (rowIndex < H) {
          rl.question('Entrez la ligne de caractères : ', (ROW) => {
            for (let j = 0; j < alphabetArrays.length; j++) {
              alphabetMap[alphabetArrays[j]][rowIndex] = ROW.slice(j * L, j * L + L);
            }
            readRowsAndUpdateMap(rowIndex + 1);
          });
        } else {
          let answer = "";
          for (let k = 0; k < H; k++) {
            for (let c = 0; c < letters.length; c++) {
              let thisLetter = letters[c];
              if ((thisLetter < 'A') || ('Z' < thisLetter)) {
                thisLetter = '?';
              }
              answer += alphabetMap[thisLetter][k];
            }
            answer += '\n';
          }
          console.log(answer);
          rl.close();
        }
      };

      readRowsAndUpdateMap(0);
    });
  });
});
