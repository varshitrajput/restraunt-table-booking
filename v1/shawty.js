const mongoose = require('mongoose');
const Shawty = require('../model/shawty')



const addShawty = async function (req) {
    
    let { username, shawtyName, shawtyAge } = req.body
    if (!username || !shawtyName || !shawtyAge) return { status: false, data: {}, message: "Invalid Request, Please enter all the data" }
    let shawtyId = shawtyName+shawtyAge
    try {
        const response = await Shawty.create({
            shawtyId,
            username,
            shawtyName,
            shawtyAge
            
        })
        console.log(response)
        return {err:false,data:{response},message:"Shawty Added Successfully"}
    } catch (error) {
        if (error.code === 11000) {
            return { status: false, data: {},message:"something went wrong"}
        }
        throw error
    }   

}


const getShawty = async function (req) {
    let { username } = req.body
    if (!username) return { status: false, data: {}, message: "Invalid Username" }
    const user = await Shawty.find({ username }).lean()
    if(!user){ return{status: false, message:"User not found"}}
    return {status:true,user,message:"Shawty Fetched"}

}


module.exports = { addShawty,getShawty };