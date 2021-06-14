const mongoose = require('mongoose');
const Shawty = require('../model/shawty')



const addShawtyAttribute = async function (req) {
    let { detail,shawtyName,username } = req.body;
    if (!detail) return { status: false, data:null, message: "Invalid Request, Please enter the detail you want to enter" }
    try {
        const response = await Shawty.findOneAndUpdate(
            { "shawtyName": shawtyName, "username": username },
            [{  $set : { "detail" : "$detail" + detail }  }],
            { returnNewDocument: true,upsert:true }
        )
        console.log(response)
        return { status: true, data: { response }, message: "Shawty details updated" }
    } catch (error) {
        console.log(error)
        return { status: false, data: error,message:"something went wrong"}
    }   




}


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


module.exports = { addShawty,getShawty,addShawtyAttribute };