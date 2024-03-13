    /*
    In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

function dup(s) {
	return s.map(w => {
		return w.split('').filter((c, i, arr) => {
			return c !== arr[i - 1];
		}).join('');
	});
};

function dup(array) {
return array.map(word => word.split('').filter( (letter, index) => letter !== word[index + 1]).join(''))
};

function dup(s) {
    let str = s.join(" ").split("");
    let arr = [];
    for (let index = 0; index < str.length; index++) {
        if (str[index - 1] != str[index]) {
            arr.push(str[index]);
        }
    }
    return arr.join("").split(" ");
}
    */


function dup(s) {
  let newS = [];
  function deleteRepeat(word) {
    let nunDup = ""
      for (let index = 0; index < word.length; index++) {
        if((word.indexOf(word[index] ) - word.indexOf(word[index -1])) != 0) {
            nunDup += word[index]
        }
    }
      return nunDup;
  }
  s.forEach(element => {
     newS.push(deleteRepeat(element))
  });
   return newS;
      
}
console.log(dup(["abracadabra","allottee","assessee"]))
console.log(dup(["kelless","keenness"]))