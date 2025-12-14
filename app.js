const path = require('path')
const os = require('os')

const log = require('./logger')

const pathObj = path.parse(__filename)

console.log(pathObj)

console.log(os.uptime())
var osTotalmem = os.totalmem()
console.log(osTotalmem)
log("This is a log message from app.js")

console.log(`Total Memory: ${osTotalmem}`)