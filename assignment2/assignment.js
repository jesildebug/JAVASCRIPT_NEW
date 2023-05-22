const readlineSync = require('readline-sync');

const marks = [];
for (let i = 1; i <= 5; i++) {
  const mark = parseInt(readlineSync.question(`Enter marks for subject ${i}:`));
  switch (mark) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid Entry");
      break;
  }
}


// task 2: sum of odd numbers between a limit




const limit = parseInt(readlineSync.question(`Enter a limit : `));
let sum = 0;

for (i=1;i<=limit;i++) {
  if( i% 2 !== 0) {
    sum = sum + i;
  }
}

console.log(`Sum of odd numbers : `,sum);



// task 3 :Even numbers in the array

const limits =  parseInt(readlineSync.question(`Enter the array limit :`));
const array = [];

console.log('Enter the values of array:');
for(i=0 ;i<=limits; i++){
  const value = parseInt(readlineSync.question(`Value ${i+1}: `));
  array.push(value)
}


let evenCount = 0;
for(i=0 ;i< array.length; i++){
 if(array[i] % 2 === 0){
  evenCount++;
 }
}

console.log(`Number of Even number in the given array is:`,evenCount);




