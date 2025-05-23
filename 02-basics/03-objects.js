// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Pain",
    "full name": "Bhagyavendra Chaudhary",
    [mySym]: "mykey1",
    age: 19,
    location: "Mathura",
    email: "rapard@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "pain@google.com"
// Object.freeze(JsUser)
JsUser.email = "hazard@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
