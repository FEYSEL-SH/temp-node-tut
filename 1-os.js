const os =require("os")

// info about the user
const user = os.userInfo()
// console.log(user)


//method returns the system uptime in second
const uptime = os.uptime()
// console.log(uptime)


const currentOS = {
    name : os.type(),
    release: os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()
}

console.log(currentOS)



