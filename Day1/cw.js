const fs = require("fs"); 

fs.writeFileSync("../hello.txt", "Hello, node js ");

const readData = fs.readFileSync("../hello.txt", "utf-8"); 
console.log(readData);

fs.appendFileSync("../hello.txt", " practice make perfact");
