const express = require("express");
require("dotenv").config();
var app = express();
app.use(express.json())
const mailRoute = require('./sendMail')
app.use(mailRoute)
app.listen(process.env.PORT, console.log('Server is up and running '+ process.env.PORT)) 

const cron = require('node-cron');

// Schedule tasks to be run on the server.
var test = 10;
// cron.schedule('*/100,30 * * * * *', function() {
//     console.log('running a task every minute');
// });
  