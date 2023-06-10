// endsWith()
// eg:1

const string = "Health is Wealth";
console.log(string.endsWith("Wealth"));

// eg:2

const string1 = "Hello World";
console.log(string1.endsWith('Hello'));


// search
// eg:1

const strng = "Namaste Javascript";
console.log((strng.search('s')));

// eg:2

const strng1 = "DataStructure and Algorithm";
console.log(strng1.search('Algorithm'));


// match();
// eg:1

const match1 = "Hello World";
console.log(match1.match('r'));

// eg:2

const match2 = "Don't give up";
console.log((match2.match('give')));


// lastIndexOf()
// eg:1

const strngs = "Hello world! Hello";
console.log(strngs.lastIndexOf('Hello'));

// eg:2


const strngs1 = "hi hello!! hi";
console.log(strngs1.lastIndexOf('hi'));



// replace()
// eg:1


const str = "Hello World";
console.log(str.replace('World','Universe!!'));

// eg:2

const Str =  "Wolcome, to 123 World";
console.log(Str.replace(/[0-9]/g, ''));
const newStr = Str.replace(/\d+/g, 'number');
console.log(newStr);



// trim();
// eg:1

const  newString =  "   Namaste Javascript   ";
console.log(newString.trim());

// eg:2

const newStrng = '\t  hello wortld!\n  ';
console.log(newStrng.trim());


// charAt()
// eg:1

const char = "Health is Wealth";
console.log(char.charAt(11));

// eg:2 

const char1 = "HelloWorld";
console.log(char1.charAt(4));
