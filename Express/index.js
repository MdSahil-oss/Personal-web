require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');


const app = express();
const host = 'localhost';
const port = 5000;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.logO(error);
})

database.once('connected', () => {
    console.log("Database connected")
})

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Your application is running on https://${host}:${port}`);
})