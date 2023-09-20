const { Router } = require('express')
const { signUp, login, getUsers } = require('../controllers/user.controller')
userRoutes = Router()

// SignUp
userRoutes.post('/signUp', signUp)

// login
userRoutes.post('/login', login)

userRoutes.get('/',getUsers)
module.exports={userRoutes}