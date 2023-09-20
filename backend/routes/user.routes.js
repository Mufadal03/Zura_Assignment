const { Router } = require('express')
const { signUp, login, getUsers } = require('../controllers/user.controller')
userRoutes = Router()

userRoutes.post('/signUp', signUp)
userRoutes.post('/login',login)
userRoutes.get('/',getUsers)
module.exports={userRoutes}