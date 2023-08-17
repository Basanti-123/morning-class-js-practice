//console.log("Hello");

//single line comment
/*
multi line comment
supper
long
comment*/

// variables
// ES5 - var
// ES6 - const, let
//keyword var, let, const

// var person = "john";
// person = "Ram";   // resign

// const person1 = "jonny";  // fixed value

// let person2 = "basanti"; // changeable
//person2 = "basa";

//console.log ({person, person1, person2})*/

// Interactions
/*alert ("js class is in session");
 person2 = prompt("what is your name?");
 const isLegal = confirm("are you 18 years and above?");

 console.log ({person, person1, isLegal});*/

// operators
// = (Value check)
//== (type the data type)
//=== (strict the check inside the value uppercase and lower case string, number)

/*alert("js class is in session")
const age = Number(prompt("What is your age"));
const isLegal = confirm("are you 18 years and above?");

if (isLegal || person2 === "Riktim Shrestha"){
    alert("welcome to the access ");
}

 
if (isLegal) {
    alert("sorry acess denied")
}

console.log ({person1, person2, isLegal});*/

// Statement
/*if (a ===0) {
} else if (a === 1){
}else if (a===2) {

}else {
    alert("Invalid day");
}
 // switch case

 switch (a===0){
    case value:
        case value:
            default:
 }


// Ternary Operator

if ( a===0) {
    console.log("its 0");
} else {
    console.log("its not 0");
}*/

// Ternary Operator
// const answer = a === 0? console.log("its 0"): console.log("its not 0");

// task 1
// prompt user to enter a  number
// check if the number is which day of the week
// example 0 => sunday => monday, 2 => tuesday,......

// task 2
// prompt user to enter a first number
// prompt user to enter a second number
// prompt user to enter a operator
// using switch case
// perform the operation and display the result

/*const day = Number(prompt("Enter a number"));
console.log({ day });

switch (day) {
  case 1: {
    console.log("sunday");
    break;
  }
  case 2: {
    console.log("Monday");
    break;
  }
  case 3: {
    console.log("Tuesday");
    break;
  }
  case 4: {
    console.log("Wednesday");
    break;
  }
  case 5: {
    console.log("Thursday");
    break;
  }
  case 6: {
    console.log("friday");
    break;
  }
  case 7: {
    console.log("Saturaday");
    break;
  }
  default:
    console.log("invalid");
}*/

// task 2
/*const Number1 = Number(prompt("Enter a first number"));
const Number2 = Number(prompt("Enter a second number"));
let operator = prompt("Enter a operator ");
let result;

switch (operator) {
  case "+":
    result = Number1 + Number2;
    break;

  case "-":
    result = Number1 - Number2;
    break;
  case "*":
    result = Number1 * Number2;
    break;
  case "/":
    result = Number1 / Number2;
    break;
  default:
    console.log("Invalid operator.");
}
if (result !== undefined) {
  console.log(`Result: ${result}`); // "Result:"+ result
}*/

// Loops
// for Loop  importent for JavaScript

// let i;
// for (i = 0; i < 10; i++) {
//   console.log("the value of i is ", i);
// }

//while loop
// let i = 0;

// while (i < 15) {
// console.log( " the value of i is ", i);
//   i++;
// }

// Do while loop
// let i = 0; // syntax

// do {
//   console.log("the value of i", i); // code executed
//   i++;
// i+= 2;
// } while (i < 20); // condition

// let j = 1;

// do {
//   console.log("the value of j", j);
//   //j++;
//   j = j+1
// } while (j < 12);

// function

let a = 3;
let b = 4;
let c = 5;
function add() {}

// pure function (resolve and  result always remains the same ; eg: utils function)
// implicit function(no return or passing from one function to another)
//explicit function  (return)
// callback function  (function vitra function pass)

// task 1 function

// write the explicit function that checks the username and password; and sends the following message
// if no username, username is requird
// if no password, password is required
// if username !== username, username not found
// if password !== password access denied
// if username and password matchs acess granted

function checkUsernameAndPassword(username, password) {
  const username = "username";
  const password = "password";

  if (!username) {
    return "Username is required";
  }
}
if (!password) {
  return "Password is required";
}
