const fs = require("node:fs")

console.log("first");

const fileContent = fs.readFileSync("./file.txt", "utf-8")
console.log(fileContent);

console.log("second");

fs.readFile("./file.txt", "utf-8", (error,data) => {
  if(error){
    console.log(error);
  } else {
    console.log(data);
  }
})

console.log("third");

fs.writeFileSync("./greet.txt", "Hello World")

fs.writeFile("./greet.txt", " Hello Guilherme", {flag: "a"}, (error, data) => {
  if(error){
    console.log(error);
  } else {
    console.log("File Written");
  }
})
