const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {UserModel } = require('../models/user.model')
require('dotenv').config()

const signUp = async (req, res) => {
    const { email, password, username } = req.body
    const user = await UserModel.findOne({ $or: [{ email }, { username }] })
    if (user !== null) return res.status(400).send({ response: "User already exist", success: false })
    try {
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

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })
    if (!user) return res.status(401).send({ response: 'Please Signup', success: false })
    const hashedPassword = user.password
    console.log(password,hashedPassword)
    try {
        bcrypt.compare(password, hashedPassword, (err, result) => {
            if (err) return res.status(400).send({ response: 'Credentials are not matching', success: false })
            if (result) {
                jwt.sign({ userId: user._id, userEmail: user.email }, process.env.JWT_SECRET, (err, token) => {
                    res.status(200).send({ response: 'SignIn Successfull', token, success: true })
                })
            }
        })
    } catch (error) {
        res.status(400).send({ response: 'OOPS Something went wrong', success: false })
    }
}

module.exports={signUp,login}