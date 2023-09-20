const { model, Schema } = require('mongoose')
const userSchema = Schema({
    username: { type: String, required: true ,unique:true},
    email: { type: String, required: true },
    password:{type:String,require:true}
},{
    timestamps: true,
    versionKey: false, // Disable the version key
})

const UserModel = model('User', userSchema)

module.exports={UserModel} 