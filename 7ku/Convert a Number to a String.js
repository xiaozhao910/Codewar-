//We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// 123 --> "123"
// 999 --> "999"

//Soultion: 
function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

// The methods are arranged in the decreasing order of performance.

// var num = 1
// Method 1:
// num = `${num}`

// Method 2:
// num = num + ''

// Method 3:
// num = String(num)

// Method 4:
// num = num.toString()

