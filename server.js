const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const register = require("./v1/register.js")
const mongoose = require('mongoose');
const uri = "mongodb+srv://trapLord2:trapLord_123@cluster0.mstc8.mongodb.net/shawtyManager?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.json());


//mongoose connection

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    let data = await register.registerUser(req);
    res.send(data);
})



app.listen(process.env.PORT || 3030, () => {
    console.log("Started Listening at port 6969")
})