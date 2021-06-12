const mongoose = require('mongoose')

const ShawtySchema = new mongoose.Schema({
    shawtyId: { type: String, required: true, unique:true},
    username: { type: String, required: true},
    shawtyName: { type: String, required: true},
    shawtyAge: {type: String, required: true}
}, { collection: 'shawty' }
)

const model = mongoose.model('ShawtySchema', ShawtySchema)

module.exports = model