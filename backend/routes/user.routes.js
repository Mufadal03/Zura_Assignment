const { Router } = require('express')
const { signUp, login, getUser, updateUser } = require('../controllers/user.controller')
const { authenticator } = require('../middlewares/authenticator')
userRoutes = Router()

// SignUp
userRoutes.post('/signUp', signUp)

// login
userRoutes.post('/login', login)

userRoutes.get('/',authenticator, getUser)

userRoutes.patch('/',authenticator,updateUser)
module.exports={userRoutes}