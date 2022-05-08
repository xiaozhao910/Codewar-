//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

// Solution 1:
function reverseWords(str) {
  return str.split(' ').map(function(word){
    //'example! an is This'
     return word.split('').reverse().join('');
     //'!elpmaxe na si sihT'
   }).join(' ');
 }
 reverseWords("This is an example!")
//Solution 2:
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}