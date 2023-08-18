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

/*function sayHiToMe(name) {  // more logic
  console.log("Hii " + name);   // more logic

}
sayHiToMe("resha");
sayHiToMe("basanti");*/

/*function celciusToFarenheit(temp) {
  if (temp > 0 && temp < 100) {
    // temp is celcius
    const farenheitTemp = (temp * 9) / 5 + 32;
    console.log("The farenheit temp is ", farenheitTemp);
  } else {
    const celciusTemp = ((temp - 32) * 5) / 9;
    console.log("the celcius temp is " + celciusTemp);
  }
}

celciusToFarenheit(32);
celciusToFarenheit(110);*/

// const checkUsernameAndPassword = (username, password) => {
//   if (username === "username" && password === "password") {
//     alert("access granted");
//   } else alert("Access Denied");
// };

// const checkUsernameAndPassword1 = (username, password) => {
//   if (username === "username" && password === "password") {
//     alert("access granted");
//   } else alert("Access Denied");
// };

// const result = checkUsernameAndPassword("username", "password");
// alert(result);

//4 types of function
// pure function (resolve and  result always remains the same ; eg: utils function)
// implicit function(no return or passing from one function to another)
//explicit function  (return)
// callback function  (function vitra function pass)

// function sayHi({ salutation, fName, lastName }) {
//   console.log("hi", salutation + " " + fName + " " + lastName);
// }
// sayHi({ salutation: "Miss", fName: "Basanti", lastName: "Nagari" });
// task 1 function

// write the explicit function that checks the username and password; and sends the following message
// if no username, username is requird
// if no password, password is required
// if username !== username, username not found
// if password !== password access denied
// if username and password matchs acess granted

// const login = (username, password) => {
//   username = username ? username.toLowerCase() : "";
//   if (!username || username === "") return "Username is required";
//   if (!password || password === "") return "Password is required";
//   if (username !== "basanti") return "Username not found ";
//   if (password !== "password") return "Username or password is worng ";
//   if (username === "basanti" && password === "password")
//     return "Access Granted";
//   return "Something went worng";
// };
// const username = prompt("Username");
// const password = prompt("Password");
// const result = login(username, password);
// console.log({ result });

// object
/*const person = {
  firstName: "basanti",
  lastName: "Nagari",
  age: 24,
  dob: "1998",
  createdDate: new Date(),
  fullName: function () {
    // method  ES5
    return this.firstName + " " + this.lastName;
  },
  getAge: () => {
    //ES6
    return 2023 - person.dob;
  },
};

//const name = person.firstName;  //
//const name = person["firstName"];
const fullname = person.fullName();
console.log(fullname);
const age = person.getAge();
console.log({ age });
*/

// hosting (variable/function)

// Object

/*const person = {
  firstName: "basanti",
  age: 16,
  isMale: true,
  address: ["Darchula", "kathmandu"],
  getDob: () => {
    return 2023 - person.age;
  },
};


const fName = person.firstName;
const dob = person.getDob();
console.log(fName);
console.log(dob);*/

// Array

// Array similar collection of data or data type hold

// const cars = [
//   "volvo",
//   "ferarri",

//   {
//     modelYear: 2010,
//     brandName: "Tesla",
//   },
// ];
// console.log(cars);

//const cars = ["Saab", "Volvo", "BMW", 46];
//console.log(cars.length);

//cars.push("vivo"); // add a value in last index
//cars.pop(""); // remove the value in last index

//cars.toString();

//console.log(cars);
/*const student_name = ["basanti", "rita", "madhabi", "rita", "sabi"];

console.log(student_name.length);
student_name.push("rabi");
console.log(student_name);

student_name.pop("sabi");
console.log(student_name);

student_name.toString();
console.log(student_name);*/

// Array methods
// Map, filter, reduce, split, find

const cars = [
  "volvo",
  "ferarri",

  {
    modelYear: 2010,
    brandName: "Tesla",
  },
];

//cars.forEach((car) => console.log(car));
//cars.map((car) => console.log(car));
//cars.map((car) => console.log(car ? car.brandName : car));

//cars.map((car) => console.log(car && car.brandName ? car.brandName : car)); // ternary Operators

// Destructuring Objects

//const user = { name: "", email: "", password: "123", phone: "" };

// const { email, password, ...rest } = user;
// console.log({ user: rest });

// console.log(user.password);

// Array destructuring
// ES6 Spread operator

/*const [first, ...rest] = [1, 2, 3, 4];
console.log(rest);*/

// const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log(others);

// const { name, ...other } = { name: "", phone: "", email: "" };
// console.log(other);
