// Task : 1

// Using the ‘switch case,’ write a program to accept an input number from the user 

const readlineSync = require('readline-sync');
const number = parseInt(readlineSync.question(`Enter a number between 1 to 7 :`));
 
let day;
switch(number) {
    case 1:
       day = "Monday";
        break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
     default:
        console.log("Invalid Input");
        break;
}

console.log(day);

// Task 2:

// Multiple table of a number

const n = parseInt(readlineSync.question(`Enter a number : `)) 

for(let i=1;i<=n;i++){
    console.log(i , "*" ,n ,"=" ,i*n );
}

 
// Task : 3
        
    // Write a program to find the sum of all the odd numbers for a given limit


    const limit = parseInt(readlineSync.question(`Enter a limit :`));
    let sum = 0;
    for(let i=1;i<=limit;i+=2){
        sum += i;

    }
    console.log(`Sum of odd numbers :` ,sum);
    
// Task : 4


// Write a program to print the following pattern (hint: use nested loop)


const row = 5;
  for(let i=1;i<=row;i++){
    let pattern = " ";
    for(let j=1;j<=i;j++){
        pattern += j + ' ';
    }
    console.log(pattern);
}
  

// Task : 5

// Write a program to find the number of even numbers in an array


let count=0;
 let size = parseInt(readlineSync.question(`Enter the size of an array :`)) ;
let arr = [];
 
for(i=1;i<size;i++) {
 let value =   parseInt(readlineSync.question(`Enter the values of array : `));
  arr.push(value)
}

for(let i=0;i< arr.length;i++){
    if (arr[i] %2 === 0) {
        count++
    }
}
console.log(`Number of event numbers :`, count);


// Task: 6

// Write a js program to check whether a given number is prime or not


let input = parseInt(readlineSync.question(`Enter a number :`));
let prime = true;
for(i=2;i<input;i++) {
    if(input %i ===0 ){
        prime = false;
        break;
      }
    }
    if(prime) {
        console.log(`The number is prime`);
    }
    else{
        console.log(`The number is not prime`);
    }


// Task 7:

// Write a menu driven program to do the basic mathematical operations such as addition, subtraction, multiplication and division (hint: use if else ladder or switch)

  

// Get input from the user
const num1 = parseFloat(readlineSync.question("Enter the first number:"));
const num2 = parseFloat(readlineSync.question("Enter the second number:"));

// Display menu options
console.log("Select an operation:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

// Get user's choice
const choice = parseInt(readlineSync.question("Enter your choice (1-4):"));

// Perform the selected operation
let result;
if (choice === 1) {
  result = num1 + num2;
  console.log(`Result: ${num1} + ${num2} = ${result}`);
} else if (choice === 2) {
  result = num1 - num2;
  console.log(`Result: ${num1} - ${num2} = ${result}`);
} else if (choice === 3) {
  result = num1 * num2;
  console.log(`Result: ${num1} * ${num2} = ${result}`);
} else if (choice === 4) {
  result = num1 / num2;
  console.log(`Result: ${num1} / ${num2} = ${result}`);
} else {
  console.log("Invalid choice. Please select a valid option.");
}
