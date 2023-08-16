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
// for Loop

let i;
for (i = 0; i < 10; i++) {
  console.log("the value of i is ", i);
}
