// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3414424321289729872n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Pain",
    age:  22,
}

const myFunction = function(){
    console.log("Hello world");    
}

// console.log(typeof id);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-Primitive)

let myName = "rapardpain"

let anothername = myName
anothername = "hazard"

// console.log(myName);
// console.log(anothername);

let userOne = {
    email :"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "pain@google.com"

console.log(userOne.email);
console.log(userTwo.email);


