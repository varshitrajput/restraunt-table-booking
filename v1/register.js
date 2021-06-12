
const User = require('../model/user')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');


async function hashPassword(password) {
    var hashPwd = await bcrypt.hash(password, 10);
    console.log(hashPwd)
    return hashPwd
}


const registerUser = async function (req) {
    let { username, email, password } = req.body
    if (!username) return { err: true, data: {}, message: "username not found" }
    if (!email) return { err: true, data: {}, message: "email not found" }
    if (!password) return { err: true, data: {},message:"password not found"}
    console.log(password)
    let hashedPassword =await hashPassword(password).then(result => {
        return result
    })
    //saving regular password right now
    try {
        const response = await User.create({
            username,
            email,
            password
        })
        console.log(response)
        return {err:false,data:{response},message:"Registered Successfully, Please Log in"}
    } catch (error) {
        console.log(error)
    }
    
         
}

const loginUser = function () {
    return {data:"login Successfull"}
}

module.exports = { registerUser,loginUser };