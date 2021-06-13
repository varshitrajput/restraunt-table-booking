const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const register = require("./v1/register.js");
const shawty = require("./v1/shawty.js");
const mongoose = require('mongoose');
const uri = "mongodb+srv://trapLord2:trapLord_123@cluster0.mstc8.mongodb.net/shawtyManager?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.json());


//mongoose connection
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    let data = await register.registerUser(req);
    res.send(data);
})

app.get('/api/login', async (req, res) => {
    console.log(req.body)
    let data = await register.loginUser(req);
    res.send(data);
})

app.post('/api/addShawty', async (req, res) => {
    console.log(req.body)
    let data = await shawty.addShawty(req);
    res.send(data);
})

app.post('/api/getShawty', async (req, res) => {
    console.log(req.body)
    let data = await shawty.getShawty(req);
    res.send(data);
})



app.listen(process.env.PORT || 3030, () => {
    console.log("Started Listening at port 6969")
})