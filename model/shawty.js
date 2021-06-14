const mongoose = require('mongoose')

const ShawtySchema = new mongoose.Schema({
    shawtyId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    shawtyName: { type: String, required: true },
    shawtyAge: { type: String},
    DOB: { type: String},
    likes: { type: Array, "default": []},
    dislikes: { type: Array, "default": [] },
    lies : { type : Array , "default" : [] },
}, { collection: 'shawty' }
)

const model = mongoose.model('ShawtySchema', ShawtySchema)

module.exports = model