const mongoose = require('mongoose')
require('dotenv').config()

// Connecting to database 
const connection = mongoose.connect(process.env.MONGO_URL)

module.exports = {connection}