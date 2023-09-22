const express = require('express')
const { connection } = require('./config/db')
const { userRoutes } = require('./routes/user.routes')
const { projectRoutes } = require('./routes/project.routes')
const { subProjectRoutes } = require('./routes/subProject.routes')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors('*'))
app.use(express.json())


const PORT = process.env.PORT || 4000

app.use('/user', userRoutes)
app.use('/project',projectRoutes)
app.use('/subProject',subProjectRoutes)
app.listen(PORT, async () => {
    try {
        await connection
        console.log('http://localhost:4000')
    } catch (error) { 
        console.log(error.message,'Failed to Connect')
    }
})