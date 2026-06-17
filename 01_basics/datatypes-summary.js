// Primitive (callByValue)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // Js is dynamically typed Language

const isLoggedIn  = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 4547658768989090546778n
 


// Reference Type (Non Primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22
}

const myFunction = function() {
    console.log("Hello World");
    
}

console.log(typeof heros);
