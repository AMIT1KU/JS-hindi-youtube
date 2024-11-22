// Primitive Data types

// 7 types : String , Number , Boolean , Null , Undefined , Symbol , Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// cosnt bigNumber = 2345687875346n


// Reference (Non Primitive)

// Array , Objects , Function

const heros = ["shaktiman", "bheem", "kaalia"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);