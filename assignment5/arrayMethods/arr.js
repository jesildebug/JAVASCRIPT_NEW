// find()
// eg:1


const arr = [0,5,10,15,20];
const find = arr.find(element => element>5);
console.log(find);

// eg:2

const newArr = [1,3,5,7,9];
const findArr = newArr.find(element => element>9);
console.log(findArr);


// findIndex()
// eg:1

const numbers = [5,6,8,2];
const findIndex = numbers.findIndex(element => element >6);
console.log(findIndex);

// eg:2

const newArray = [1,3,5,7,9];
const findIndex1 = newArray.findIndex(element => element <3);
console.log(findIndex1);



// includes()
// eg:1

const fruits = ["apple","orange","mango","grape"];
const includes = fruits.includes("apple");
console.log(includes);

// eg:2

const fruit = ["apple","orange","mango"];
const fruitIncludes = fruit.includes("banana");
console.log(fruitIncludes);


// some()
// eg:1


const array = [2,4,6,7,8,9];
const some = array.some(element => element %2 === 0);
console.log(some);

// eg:2

const newArray1 = [ 5,4,30,44];
const someArr= newArray1.some(element => element %5 === 0);
console.log(someArr);


// forEach()
// eg:1

const values = [1,3,4,5,6];
const forEach = values.forEach(element => console.log(element));

// eg:2

const animals = [ "lion","cow","tiger","cat"];
const forEachAnimals = animals.forEach(element => console.log(element));



// toString
// Eg:1

const arrval = [2,6,8,7,5];
const toString = arrval.toString();
console.log(toString);

// eg:2

const flowers = ["jasmine","rose","lotus"];
const toStringFlowers = flowers.toString();
console.log(toStringFlowers);


// valueOf() 

// eg:1

const datas = [1,4,6,7,9];
const valueOf = datas.valueOf();
console.log(valueOf);


// fill()
// eg:1

const ele = [2,4,5,6];
console.log(ele.fill(0));

// eg:2

const element = [1,2,3,4,5];
console.log(element.fill(2,3,4));


// map()

// eg:1

const even=[2,4,6,8];
const map = even.map(element => element*5);
console.log(map);

// eg:2

const odd = [1,3,5,7,9];
const newMap = odd.map(element => element+1);
console.log(newMap);



// reduce
// eg:1

const nums = [2,4,6,8];
const sum = nums.reduce((acc,curr) => acc+curr)
console.log(sum);

// eg:2

const num = [1,2,3,4,5,6,7,8,9,10];
const reduce = num.reduce((acc,curr) => acc+curr);
console.log(reduce);
