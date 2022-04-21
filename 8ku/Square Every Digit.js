
// Square every digit of a number 
//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an intege

function squareDigits(num) {

    // Convert the result to a number. "252525" -> 252525
    return Number( 
                    num.toString() // num === "555"
    
                    .split('') // ["5", "5", "5"]
    
                    .map(elem => elem * elem)    //"5" * "5" === 25 (Type coversion)
                    // Now we have [25, 25, 25]
    
                    .join('') // "252525"
                );
    }
    
    squareDigits(555);