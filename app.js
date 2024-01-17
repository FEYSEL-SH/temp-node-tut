// npm global command come with code 
// npm --v
//local dependency- use it only in the particular project
//npm i <package name> -g

// global dependency- use it in all the project
// npm install -g <package name>
// sudo install -g <package name> for mac


const _ = require('lodash')
const items = [1, [2, [3, [4]], 5], 6]
const newItems = _.flattenDeep(items)
console.log(newItems)