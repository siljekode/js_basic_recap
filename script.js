//? Svaret på hver av oppgavene skal konsoll logges

//* Assignment 1: Logging to the Console

console.log("Hello world!");


//* Assignment 2: Variables
// Let defines a variable that can be changed later.
let x = 10;

// Const defines a variable that cannot be changed later.
const y = 5;

/* Creating a variable to shorten code The 2 variables above.
Output should be: "Resultatet er: 15" (hvor 15 er summen av variablene) */

let z = x + y;
console.log("Resultatet er: " + z);


//* Assignment 3:
// Use double operators to solve the parts below:

// Incrementing a number by 1.

let num1 = 13;
num1++;

console.log(num1);

// Decrementing a number by 1.

num1--;
console.log(num1);

// Multiplying a number by itself.

console.log(num1 * num1);

// Dividing a number by itself.

console.log(num1 / num1);


//* Assignment 4:
/* Make an if else statement that returns a random string */

let wildMagicSurge = [
  "castFireballOnSelf",
  "teleportToAstralPlane",
  "castConfusionOnSelf",
  "mustShoutWhenSpeak",
];
if (wildMagicSurge.length) {
  let randomwildMagicSurge =
    wildMagicSurge[Math.floor(Math.random() * wildMagicSurge.length)];
  console.log(randomwildMagicSurge);
}


//* Assignment 5:
/* Make a function that uses a parameter to check if a number is odd or even */

const evenOrOddArrow = (num2) => {
  return num2 % 2 ? "Odd" : "Even";
};

console.log(evenOrOddArrow(2));
console.log(evenOrOddArrow(5));


//* Assigment 6:
/* Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working. */

let userMale = false;
const userTitle = userMale ? "Mr" : "Mrs";
console.log(userTitle);


console.log ("Assignment 7: 404 Not found")


//* Assigment 8:
/*
Write a function that takes in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24

Use whichever function syntax you want.
Use template literal in your return: `This is a template literal ${variable}`

Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working. */

function greeting(name, number) {
  if (number <= 6) {
    return `Goodnight ${name}`;
  } else if (number <= 12) {
    return `Goodmorning ${name}`;
  } else if (number <= 18) {
    return `Goodday ${name}`;
  } else if (number <= 24) {
    return `Goodnight ${name}`;
  } else {
    return `Invalid time`;
  }
}

console.log(greeting("Jonas", 3));
console.log(greeting("Jonas", 11));
console.log(greeting("Jonas", 16));
console.log(greeting("Jonas", 21));
console.log(greeting("Jonas", 25));

//My notes: 6-12 and 12-18 gives two outcomes for value 12 that are mutually exclusive.
//Not sure how to do it, but in math vi use [6-12> [12-18> (semi-open brackets).
//It means starts at, and includes [6, and then ends at, but does NOT include 12>.


//* Assignment 9:
/* Write a function that takes in 2 numbers as parameters.

In your function, check which of the numbers received is the largest,
then return the sum of the largest number divided by the smaller.

Use arrow function syntax.

Example: your function receives 13 and 24, it should return the sum of 24/13 */

//Other solutions.

// function largest (p1,p2){
//     let max = Math.max(p1,p2)
//     let min = Math.min(p1,p2)
//     return max/min
// }
// let answer = largest(1.2,20)
// console.log (answer)

// const largest = (p1,p2) => {
//     let max = Math.max(p1,p2)
//     let min = Math.min(p1,p2)
//     return max/min
// }
// console.log (largest(20,10))

//Arrow function

let divide = (number1, number2) =>
  Math.max(number1, number2) / Math.min(number1, number2);
console.log(divide(20, 10));

//My notes: Sum is always addition (+).
//You cannot use "Sum of 24/13". Correct terminology is: dividend / divisor = quotient.


//* Assignment 10:
/* Make a function that uses Switch/Case (if you have many if/else) or if/else,
Random Number Generator, Methods, and Arrays with Objects */

//methods ex: .slice, .pop etc.


const classFeatures = [
  {
    class: "Cleric",
    abilityScore: "wisdom",
    proficiencies: ["simpleWeapons", "mediumArmour", "divineMagic"],
  },
  {
    class: "Bard",
    abilityScore: "charisma",
    proficiencies: ["musicalInstruments", "lightArmour", "arcaneMagic"],
  },
  {
    class: "wizard",
    abilityScore: "intelligence",
    proficiencies: ["quarterStaff", "noArmour", "arcaneMagic"],
  },
];

let randomClass = classFeatures[Math.floor(Math.random() * classFeatures.length)];
console.log(randomClass.class);

function getProficiency(){
    if (randomClass.class==="Cleric"){
      return  `proficiency 1: ${randomClass.proficiencies[0]}
proficiency 2: ${randomClass.proficiencies[1]}
proficiency 3: ${randomClass.proficiencies[2]}`
    } else if (randomClass.class==="Bard"){
       return `proficiency 1: ${randomClass.proficiencies[0]}
proficiency 2: ${randomClass.proficiencies[1]}
proficiency 3: ${randomClass.proficiencies[2]}`
     } else {
               return `proficiency 1: ${randomClass.proficiencies[0]}
proficiency 2: ${randomClass.proficiencies[1]}
proficiency 3: ${randomClass.proficiencies[2]}`
             }
 }
 
 console.log(getProficiency())



//* BAONUS assignment:
/*
EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make a function called coolMaker that takes in 1 parameter.

If the parameter received is a string:
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

Use arrow function syntax.

Console log the function call with a few different datatypes to show that it's working
*/

//! Write code here
