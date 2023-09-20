const { Router } = require('express')
const { signUp, login } = require('../controllers/user.controller')
userRoutes = Router()

userRoutes.post('/signUp', signUp)
userRoutes.post('/login',login)

module.exports={userRoutes}