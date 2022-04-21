//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string

//soultion 1: 
function fakeBin(x){
    let result = '';
    for(let i=0;i<x.length;i++){
      x[i] <5 ? result +=0 : result+=1;
    }
    return result;
  }
  
 //soultion 2: 
 function fakeBin(x){
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
 }