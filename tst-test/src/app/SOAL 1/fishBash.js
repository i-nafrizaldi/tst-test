// printNumbers.js
function printNumbers(count) {
  for (let i = 1; i <= count; i++) {
    if (i % 15 === 0) {
      console.log("fish bash");
    } else if (i % 3 === 0) {
      console.log("fish");
    } else if (i % 5 === 0) {
      console.log("bash");
    } else {
      console.log(i);
    }
  }
}

module.exports =  printNumbers 
