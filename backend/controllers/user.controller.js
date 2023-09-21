const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {UserModel } = require('../models/user.model')
require('dotenv').config()

// Signing Up :-
const signUp = async (req, res) => {
    // Getting email , password , username from request body to fill the requirent of the model.
    const { email, password, username } = req.body

    // Checking if User with the email provided already exists or not
    const user = await UserModel.findOne({ $or: [{ email }, { username }] })
    if (user !== null) return res.status(400).send({ response: "User already exist", success: false })

    try {
        // Hashing the plain text password to hashed password
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.status(400).send({ response: err.message, success: false })
            }
            const user = new UserModel({ email, password: hash, username })
            await user.save()
            res.status(201).send({ response: "User created", success: true })
        })
    } catch (error) {
        res.status(500).send({ response: error.message, success: false })
    }
}

// Login :-
const login = async (req, res) => {
    // Getting Email Password from request body
    const { email, password } = req.body
    
    // Checking if user with provided email exists or not
    const user = await UserModel.findOne({ email })
    if (!user) return res.status(401).send({ response: 'Please Signup', success: false })

    const hashedPassword = user.password
    try {
        // Comparing Plain text Password with hashed Password
        bcrypt.compare(password, hashedPassword, (err, result) => {
            if (err) return res.status(400).send({ response: 'Credentials are not matching', success: false })
            if (result) {
                // Generating JWT token for user
                jwt.sign({ userId: user._id, userEmail: user.email }, process.env.JWT_SECRET, (err, token) => {
                    res.status(200).send({ response: 'SignIn Successfull', token, success: true })
                })
            }
        })
    } catch (error) {
        res.status(400).send({ response: 'OOPS Something went wrong', success: false })
    }
}

const getUser = async (req, res) => {
    const { userId } = req.body 
    try {
        const user = await UserModel.findOne({ _id: userId })
        res.status(200).send({response:user,success:true})
    } catch (error) {
        res.status(400).send({response:`Failed to get User ${error.message}`,success:false})
    }
}

const updateUser = async (req, res) => {
    const { username ,userId} = req.body 
    try {
        const user = await UserModel.findOneAndUpdate({ _id: userId }, { username })
        if (user.modifiedCount !== 0) {
            res.status(201).send({response:'Username Updated',success:true})
        }
    } catch (error) {
        res.status(400).send({ response:`Failed to update Username ${error.message}`,success:false})
    }
}
module.exports={signUp,login,getUser,updateUser}