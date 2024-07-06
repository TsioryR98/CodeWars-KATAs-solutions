let nameList = []

function likes(names) {
  let defaults = "no one like this";
  
  if (names.length === 1) {
      return `${names[0]} likes this`
  }
  else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`
  }
  else if (names.length ===3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else if (names.length >= 4) {
    let count = 0;
    for (let i = 0; i < nameList.length-2; i++) {
       count++
    }
    return `${names[0]}, ${names[1]} and ${count} others like this`
  }

  return defaults;
  
}

console.log(likes(nameList));
