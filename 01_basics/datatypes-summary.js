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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let youtubeName = "hiteshkumar"
 let anothername = youtubeName
 console.log(anothername);  // hiteshkumar

 anothername = "chaiaurcode"
 console.log(youtubeName);
 console.log(anothername);

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "hitesh@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 
 
 
 
 
 
