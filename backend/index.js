const express = require('express')
const { connection } = require('./config/db')
const { userRoutes } = require('./routes/user.routes')
require('dotenv').config()
const app = express()
app.use(express.json())


const PORT = process.env.PORT || 4000

app.use('/user', userRoutes)


app.listen(PORT, async () => {
    try {
        await connection
        console.log('http://localhost:4000')
    } catch (error) { 
        console.log(error.message,'Failed to Connect')
    }
})