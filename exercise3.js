// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

let a='test';
let b='true';
const c=789;



// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const {firstName,lastName,age,eyeColor}=person;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

let okObj={a,b,c};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";


// default arguments
// default age to 10;
const age= (age=10) =>age;
function isValidAge(age) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}


let response=(username,location)=>{if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }}


const first= () =>{
    const greet="hi";
    const second= () =>{
        
        alert(greet);
        
    }
    
    return second;
    
}

const newFunction=first();
newFunction();









const mul=(a,b)=>a*b;

const curriedMultipl=(a)=>(b)=>a*b;


