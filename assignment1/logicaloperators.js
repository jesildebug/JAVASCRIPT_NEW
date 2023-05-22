var readlineSync =require("readline-sync");
let x = readlineSync.question("enter a number : ");
if (x>=90 || x===120) {
    console.log("A",x);
}