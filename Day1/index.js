// // console.log("this is my first program in node js ");

// const data = require("fs"); 
// data.writeFileSync("abc.txt", "hello , how are you");

// const readData = data.readFileSync("abc.txt", "utf-8"); 



const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";

module.exports = { sum, sub, mul, div };

