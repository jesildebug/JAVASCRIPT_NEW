// slice
// eg:1

const number = [1,2,3,4];
const newNumber = number.slice(1,3);
console.log(newNumber);


// eg:2
const element = ['t','e','s','t'];
const newElement = element.slice(-3);
console.log(newElement);

// splice()
// eg:1

const fruits = ["apple","orange","banana","kiwi"];
const newFruits = fruits.splice(1,1);
console.log(fruits);

// eg:2

const numbers = [1, 2, 5];
numbers.splice(2, 0 ,3);
console.log(numbers);


// isArray()
// eg:1

const  array = [9,7,5,3,1];
console.log(Array.isArray(array));

// eg:2

const notarr = 'cat';
console.log(Array.isArray(notarr));


// indexOf()
// eg:1

const data = ['rahim','athul','anju'];
console.log(data.indexOf('athul'));

// eg:2

const animal = ['dog','cow','cat'];
console.log(animal.indexOf('cow'));



// lastIndexOf()
// eg:1

const names = ['anju','ammu','anju'];
console.log((names.lastIndexOf('anju')));

// eg:2

const animals = ['frog','elephant','fox'];
console.log(animals.lastIndexOf('fox'));

// entries()
// eg:1

const values = [4,6,7,9,1];
const entries = values.entries();
for(let [index , value] of entries) {
    console.log(index,value);
}

// eg:2

const birds = ['parrot',"dove","peacock","crow"];
const  entries2 = birds.entries();
for(let [index,value] of entries2){
    console.log(index,value);
}


// every()
// eg:1

const even = [2,4,6,8,10];
const isEven = even.every(element => element % 2 === 0);
console.log(isEven);

// eg:2

const odd = [3,7,5,8];
const isOdd = odd.every(element => element %2 !== 0);
console.log(isOdd);


// filter()
// eg:1

const  arrayValues = [1,2,3,4,5,6,7,8,9];
const filter = arrayValues.filter(element => element % 2 ===0);
console.log(filter);

// eg:2

const students =  ["anju","devika","revathy","sindhu"];
const filterStudents = students.filter(students => students.length < 5 );
console.log(filterStudents);