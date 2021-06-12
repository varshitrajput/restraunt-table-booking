const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const register = require("./v1/register.js")
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());


//mongoose connection

mongoose.connect('mongodb://localhost:27017/login-app-db', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    let data = await register.registerUser(req);
    res.send(data);
})



app.listen(6969, () => {
    console.log("Started Listening at port 6969")
})