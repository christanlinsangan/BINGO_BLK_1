
let B = false,
    I = false,
    N = false,
    G = false,
    O = false;

generateRandomNumber(75);

function updateT(min, max, count) {
  const numbers = new Set();
  while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return Array.from(numbers);
}
const columns = ['B', 'I', 'N', 'G', 'O'];
for (let col of columns) {
  const numbers = updateT(columns.indexOf(col) * 15 + 1, columns.indexOf(col) * 15 + 15, 5);
  for (let i = 0; i < 5; i++) {
      document.getElementById(`${col}${i + 1}`).textContent = numbers[i];
  }
}

function generateRandomNumber (max) {
  
}
  //Genearte and store unique numbers
  
let usedNumbers = new set();

let randomNum = Math.floor(Math.random() * max) + 1;

 // if ... else if ... else statement
 // if (condition) { block of code to execute }
 // ==, ! =, >, <, >=, <=, &&, ||
 if(randomNum <= 15){  
   B = true;

   if (B1||B2||B3||B4||B5 == randomNum){
    randomNum.add(usedNumbers);
    randomNum = Math.floor(Math.random() * max) + 1;
   }

    console.log(`Random Number ${randomNum} is in B. 1 - 15`);


    if (randomNum = B1 || B2 || B3 || B4 || B5){
      generateRandomNumber(75);
    }

 } else if (randomNum >= 16 && randomNum <= 30) {
   I = true;
      console.log(`Random Number ${randomNum} is in I. 16 - 30`);


      

} else if (randomNum >= 31 && randomNum <= 45) {
   N = true;
    console.log(`Random Number ${randomNum} is in N. 31 - 45`);

    

} else if (randomNum >= 46 && randomNum <= 60) {
   G = true;
    console.log(`Random Number ${randomNum} is in G. 46 - 60`);

    

} else if (randomNum >= 61 && randomNum <= 75) {
   O = true;
   console.log(`Random Number ${randomNum} is in O. 61 - 75`);
 
 } else {
    console.log(`Random Number is invalid.`)
 }
    console.log(randomNum);

    if (B == true && I == true && N == true && G == true && O == true) {
      console.log(`BINGO!!!!`)
    }
    function instantBingo() {
      let max = 75;
      while (!(B && I && N && G && O)) {
          generateRandomNumber(max);
      } }
    
  
