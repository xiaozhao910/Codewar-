// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//solution1:
function doubleChar(str) {
  return str.split('').map(s => s+s).join('')
}

//solution2:
function doubleChar(str) {
  var newString = "";
  for( i = 0; i < str.length; i++) {
    newString += str[i] + str[i];
  }
  return newString;
}