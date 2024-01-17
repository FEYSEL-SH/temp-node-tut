const {readFileSync, writeFileSync} = require("fs")

console.log("start")
const first = readFileSync("./content/first.txt", "utf-8")
const second = readFileSync("./content/second.txt", "utf-8")
// console.log(first, second)

//it create third file
writeFileSync("./content/third.txt", first + second, {flag : "a"})

console.log("done with this task")
console.log("start")
























