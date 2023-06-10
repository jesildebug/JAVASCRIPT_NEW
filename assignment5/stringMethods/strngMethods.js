// charCodeAt()... represent in Unicode value 
// eg:1


const string = " hello World";
console.log(string.charCodeAt('o'));

// eg:2

const newString = "Health is Wealth";
console.log(newString.charCodeAt(10));



// fromCharCode()
// eg:1

const charCode1 = 65;
const charCode2 = 66;
console.log(String.fromCharCode(charCode1,charCode2));

// eg:2

const charcode1 = 72; // Unicode value for 'H'
const charcode2 = 101; // Unicode value for 'e'
const charcode3 = 108; // Unicode value for 'l'
const charcode4 = 108; // Unicode value for 'l'
const charcode5 = 111; // Unicode value for 'o'

console.log(String.fromCharCode(charcode1,charcode2,charcode3,charcode4,charcode5));


// split()
// eg:1

const strings = " Hello, World";
console.log(strings.split(','));

// eg:2

const newStrings = "Hello, world! How are you?";
console.log(newStrings.split(/[,.?!]/));


// repeat()
// eg:1


const string1 = "Hello!"
console.log(string1.repeat(2));

// eg:2

const string2 = "Welcome !! ";
console.log(string2.repeat(3));


// slice()
// eg:1

const sentence1 = 'Namaste JavaScript';
console.log(sentence1.slice(7,18));


// eg:2

const sentence2 = "Hello, world!";
console.log(sentence2.slice(-6));
console.log(sentence2.slice(0 , 5));


// substr()
// eg:1

const newstring = 'Hello World!';
console.log(newstring.substring(6,11));

// eg:2

const newstring1 = 'Welcome to JavaScript';
console.log(newstring1.substring(10,15));


// toString()
// eg:1

const num = 57; 
const tostring = num.toString()
console.log(toString);
console.log(typeof tostring);

// eg:2

const newstr = 16;
const newstr1 = newstr.toString();
console.log(newstr1);
console.log(typeof newstr1);


// valueOf()
// eg:1

const strObject =  new String ("Hello value");
console.log(strObject.valueOf());

// eg:2

const strObject1 = new String ('Welcome to ');
console.log(strObject1 + 'JavaScript');