const mongoose = require('mongoose')
const { model, Schema } = mongoose

const subProjectSchema = Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status:{type:Boolean,default:true}
}, {
    timestamps: true,
    versionKey: false, // Disable the version key
})

const SubProjectModel = model('SubProject', subProjectSchema)

module.exports={SubProjectModel}