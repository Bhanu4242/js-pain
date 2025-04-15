const name = "pain"
const repoCount = 6

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hazar-d-pain')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('z'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   pain   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pain.com/pain%20chaudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('pain'));

console.log(gameName.split('-'));






