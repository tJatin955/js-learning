// primitive datatypes

// 7 types:  String, number, Boolean, null, undefined, Symbol, Bigint

const score = 30                                            //return type: number
const scoreValue = 130.3                                    //return type: number

const isLoggedIn = false                                    //return type: boolean
const outSideTemp = undefined                               //return type: undefined
let useremail;                                              //return type: indefined

const id = Symbol('123');
const secondId = Symbol('123');

console.log(id===secondId);

const bigNumber = 313564546313231364531315n;

console.log(typeof(bigNumber));

//  Reference Types or Non-primite Types
//  Arrays, Objects, Functions

const heroes = ["shaktiman","naagraj","doga"]               //return type: object

//objects

let myObj = {                                               // return type: object
    name:"Jatin", 
    age:25
}

//Functions

const myFunction = function(){                              // return type: function
    console.log("Hello world")
}

console.log(typeof(myObj))