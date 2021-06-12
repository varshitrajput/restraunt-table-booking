
const User = require('../model/user')
const bcrypt = require('bcryptjs')

async function hashPassword(password) {
    var hashPwd = await bcrypt.hash(password, 10);
    console.log(hashPwd)
    return hashPwd
}


const registerUser = async function (req) {
    let { username, email, password } = req.body
    console.log(password)
    let hashedPassword =await hashPassword(password).then(result => {
        return result
    })
    return {hashedPassword: hashedPassword}
    
         
}

const loginUser = function () {
    return {data:"login Successfull"}
}

module.exports = { registerUser,loginUser };