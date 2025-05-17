
// indexing

'Ali'[2]  // works for browser console 

let nameOf = 'Arsalan'
console.log(nameOf[2]);

// string length property
console.log(nameOf.length);


// String methods
let animal = 'Lion'

let capitalMessage = animal.toUpperCase()
console.log(capitalMessage);

console.log(animal.toLowerCase());
console.log(animal.charAt(0));
console.log(animal.indexOf('L'));

let concatedString=animal.concat(' hello')
console.log(concatedString,'.');

console.log(animal.charCodeAt("i"));
console.log(animal.at(1));  

let spacedWord='       Hello           '
console.log(spacedWord);

let removedSpaceWord=spacedWord.trim()
console.log(removedSpaceWord)

console.log(spacedWord.trimStart());
console.log(spacedWord.trimEnd());


let checkWord="Hello my name is muhammad Arsalan"
console.log(checkWord.includes('my name is'));
console.log(checkWord.includes('hello'));

let replacedWord=animal.replace('Lion','Cat')
console.log(replacedWord);

let checkReplace ='i am a i am a'
console.log(checkReplace.replace('a','l'));
console.log(checkReplace.replaceAll('a','l'));

const securedNumber='1234'
console.log(securedNumber.padStart(16,'*'));
console.log(securedNumber.padEnd(16,'*'));


const string = 'I am here to help you'
const number = "2341"

console.log(string.split());
console.log(number.split());

const templateLiteral=`hello my name is muhammad Arsalan and i have number of ${number}` 
console.log(templateLiteral);





// chaining
// console.log(spacedWord.trim().toUpperCase());









