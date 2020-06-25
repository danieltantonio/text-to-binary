const prompt = require('prompt-sync')();

let word = prompt("Word you want to convert: ");
let bitCount = [128,64,32,16,8,4,2,1];
let toBinary = [];
let charCode;

for(let i = 0; i < word.length; i++) {
  charCode = word.charCodeAt(i);
  for(let j = 0; j < bitCount.length; j++) {
    if((charCode - bitCount[j]) >= 0) {
      toBinary.push(1);
      charCode -= bitCount[j];
    } else {
      toBinary.push(0);
    }
  }
  toBinary.push(" ");
}

console.log(toBinary.join(" "));
