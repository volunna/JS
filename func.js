

function findLongestPrefix(strings) {
    let prefix = strings[0];
  
    for (let i = 1; i < strings.length; i++) {
      while (strings[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, -1);
      }
  
      if (prefix === "") {
        return "спільний префікс не знайдено";
      }
    }
  
    return prefix;
  }

  const str = ["flower", "flow", "flight"];
const str2 = ["dog", "racecar", "car"];

console.log(findLongestPrefix(str)); 
console.log(findLongestPrefix(str2)); 

// --------------------------------------
// https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Given an integer n, return a counter function. This counter function initially returns n and then 
// returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function(n) {
  let count = n;
  return function() {
      return count++;
  };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());


// -------------------------------------------------------------------------

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {  
    for (let j = i + 1; j < nums.length; j++) {  
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

let two = twoSum([2, 7, 11, 15], 9);
console.log(two)

// --------------------------------------------------------------------------

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 
// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

var expect = function(val) {
  return {
      toBe:(val2) => {
          if(val !== val2 ) throw Error("Not Equal");
          else return true
      },
      notToBe:(val2)=>{
if(val === val2) throw Error("Equal");
else return true
      }
  }
};
