const user = {
    username: "pain",
    price: 999,

    welecomeMessage: function () {
        console.log(`${this.username } , welcome to website`);
        console.log(this);
        
    }
}

// user.welecomeMessage()
// user.username = "sam"
// user.welecomeMessage()

// console.log(this);

// function pepsi() {
//     let username = "pain"
//     console.log(this.username);
// }

// pepsi()

// const pepsi = function () {
//     let username = "pain"
//     console.log(this.username);
// }

const pepsi =  () => {
    let username = "pain"
    console.log(this);
}

// pepsi()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2    // implicit return 

// const addTwo = (num1, num2) => ( num1 + num2)   

const addTwo = (num1, num2) => ({username: "pain"})

console.log(addTwo(4, 9));

const myArray = [2, 5, 8, 6, 9]

myArray.forEach()