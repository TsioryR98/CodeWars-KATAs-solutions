let numberList=[1];
function findUniq(array) {
let order = array.sort((a,b) => a-b)
let unique =[];
    if (order[0] < order[1]) {
    unique.push(order[0]);
}
    else if (order[order.length-1] > order[order.length-2]) {
    unique.push(order[order.length-1]);
}
    else {
    unique.push(1);
}
return unique.join("")
}

function findUniq1(arr) {
    // Initialize an empty object to store counts
    const counts = {};
  
    // Iterate through the array
    for (const num of arr) {
      // Update the count for each unique number in the object
      counts[num] = (counts[num] || 0) + 1;
    }
  
    // Find the unique number by checking the counts
    for (const num in counts) {
      if (counts[num] === 1) {
        return parseFloat(num); // Convert the unique number to a float if needed
      }
    }
  }
  
  // Test cases
  console.log(findUniq1([1, 1, 1, 1, 1, 1,2])); // Output: 2
  console.log(findUniq1([0, 0, 0.55, 0, 0])); // Output: 0.55