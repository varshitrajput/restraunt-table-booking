
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
    if (!username) return { status: false, data: {}, message: "username not found" }
    if (!email) return { status: false, data: {}, message: "email not found" }
    if (!password || password.length <8) return { status: false, data: {},message:"Invalid Password"}
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
        if (error.code === 11000) {
            return { status: false, data: {},message:"Username already exists"}
        }
        throw error
    }   
}

const loginUser = async function (req) {
    let { username, password } = req.body
    if (!username) return { status: false, data: {}, message: "Invalid Username" }
    if (!password || password.length <8) return { status: false, data: {},message:"Invalid Password"}
    const user = await User.findOne({ username }).lean()
    if(!user){ return{status: false, message:"User not found"}}
    if (password == user.password) {
        return {status:true,user,message:"Login Succesfull"}
    }
    else {
        return { status:false,message:"Incorrect Password"}
    }
    return {user}
}

module.exports = { registerUser,loginUser };