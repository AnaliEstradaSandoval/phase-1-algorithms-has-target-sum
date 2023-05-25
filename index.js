function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    const complement = target - array[i]
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === complement) return true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n*2)
*/

/* 
  Add your pseudocode here
  Iterate through an array of numbers
  If the complement + number equals target 
    Return true
  Else return false
*/

/*
  Add written explanation of your solution here
  We iterated through each number in the array to find a complement
  that adds up to the target number by creating two loops. The 
  compliment number is the difference between the target number 
  and the array number. The loops helps determine weather the addition
  of the number in the array and the compliment is equuals to the 
  target number. If it is then it returns true, if not then returns false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([9, -2, 4], 4));
}

module.exports = hasTargetSum;
