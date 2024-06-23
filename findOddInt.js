
function findOdd(A) {
    let occurence = {};
    A.forEach(number => {
      occurence[number] ? occurence[number]++ : occurence[number] = 1;
         //occurence[number] = (occurence[number] || 0) + 1; //sans condition
    });
    for (const key in occurence) {
      if (occurence[key] % 2 != 0) {
           return key;
      }
    }
  }
  
  
  function findOdd(A) {
    let occurence = {};
    A.forEach(number => {
      occurence[number] = (occurence[number] || 0) + 1;
    });
    for (const key in occurence) {
      if (occurence.hasOwnProperty(key) && occurence[key] % 2 !== 0) {
        return parseInt(key,10); // +key conversion clé en entier
        
      }
    }
  }
  
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));

