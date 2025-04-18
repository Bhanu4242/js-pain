// Immediately invoked Function Expressions (IIFE)


(function Pepsi() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('pain')