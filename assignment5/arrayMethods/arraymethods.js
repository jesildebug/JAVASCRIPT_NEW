//  sort ()
// example:1

let arr = [1,3,4,7,9];
let sort = arr.sort((a,b) => a-b);
console.log(arr);

// example:2 

const fruits = ["apple","orange","banana","grape"];
const sortedarray = fruits.sort();
console.log(sortedarray);


// reverse ()
// example:1

const numbers = [10,9,8,7,6];
const reverse = numbers.reverse();
console.log(reverse);

// example:2
 const names = ["john","peter","maya"];
 const reverseName = names.reverse();
 console.log(reverseName);

// pop ()
// example:1

let values = [1,3,5,7,9];
let pop = values.pop();
console.log(values);

// example:2

const data = ["manu","veena","karthik"];
const datas = data.pop();
console.log(data);

// push()
// example:1

const  array = [1,3,5,7,9];
const push = array.push(11);
console.log(array);

// example:2

const veg = ["carrot","pumpkin","beetroot"];
const vegetables = veg.push('onion');
console.log(veg);


// shift 
// example:1

const employees = ["binu","akhil","raju"];
const first = employees.shift();
console.log(employees);

// example:2

const value = [2,4,6,8,10];
const value1 = value.shift();
console.log(value);


// unshift()
// example:1

const boys = ["aju","sonu","amir"];
const boys1 = boys.unshift("rejil");
console.log(boys);


// exaple:2

const flowers = ["jasmine","lilly","rose"];
const flower1 = flowers.unshift("lotus");
console.log(flowers);


// concat
// example:1

const states = ["kerala","karnataka","taminadu"];
const concat = states.concat(["punjab","hariyana"]);
console.log(concat);

// example:2

const arrayValues = [1,3,7];
const newArray = arrayValues.concat([9,11]);
console.log(newArray);


// join()
// example:1

const grades = ["A","B","c"];
const joinedString = grades.join(',  ');
console.log(joinedString);

// example:2

const forms = ['water','liquid','solid'];
const  join = forms.join('/');
console.log(join);
