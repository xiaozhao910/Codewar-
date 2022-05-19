// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//Solution 

function stray(numbers) {
  
  var num = numbers.sort((a,b) => a-b);
  return (num[0] === num[1]) ? num[num.length-1] : num[0];
}

