/*
 * 3) DATABASE TYPES + COMPARISON
/*
 არსებობს რამდენიმე ტიპის მონაცემთა ბაზა:

 1. SQL (Relational Database)
 - MySQL, PostgreSQL
 - მონაცემები ინახება ცხრილებში (tables)
 - სტრუქტურირებული ფორმა
 - ძლიერი ურთიერთობები (relations)

 2. NoSQL (Non-relational)
 - MongoDB, Firebase
 - მოქნილი სტრუქტურა (JSON-like)
 - სწრაფი scaling
 - არ აქვს strict schema

*/


/*
 * 4) BACKEND EXPLANATION (SERVER, DB, API)

/*
 BACKEND არის აპლიკაციის ის ნაწილი, რომელსაც მომხმარებელი ვერ ხედავს.

 კომპონენტები:

 1. SERVER
 - იღებს request-ს (მაგ: login)
 - აბრუნებს response-ს

 2. DATABASE
 - ინახავს მონაცემებს (users, posts)

 3. API
 - communication layer frontend ↔ backend

 STACK EXAMPLES:

 - MERN: MongoDB + Express + React + Node
 - LAMP: Linux + Apache + MySQL + PHP
 - MEAN: MongoDB + Express + Angular + Node
*/

console.log("Backend runs server, handles DB, and exposes APIs");


/*
 * 5) NODE.JS + GLOBAL OBJECT + PROCESS

/*
 Node.js არის JavaScript runtime environment
 რომელიც გაძლევს საშუალებას JS გაუშვა browser-ის გარეთ.

 სად გამოიყენება:
 - servers
 - APIs
 - backend systems
 - CLI tools
*/


// ------------------------------
// Node.js GLOBAL object
// ------------------------------
console.log("GLOBAL object example:", global);

// ------------------------------
// process object (very important)
// ------------------------------
console.log("Process ID:", process.pid);
console.log("Node version:", process.version);
console.log("Platform:", process.platform);

// environment variables
console.log("Env:", process.env);

// current working directory
console.log("CWD:", process.cwd());


// ------------------------------
// modules example
// ------------------------------
const os = require("os");
const path = require("path");

console.log("OS type:", os.type());
console.log("Home dir:", os.homedir());

console.log("File path example:", path.join(__dirname, "test.js"));


/**************************************
 * EXTRA: SIMPLE NODE FUNCTION EXAMPLE
 **************************************/

function sum(a, b) {
  return a + b;
}

console.log("Sum:", sum(5, 10));

function multiply(a, b) {
  return a * b;
}

console.log("Multiply:", multiply(3, 4));

function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Node.js User"));

/*
 Run command:
 node file_name.js
*/