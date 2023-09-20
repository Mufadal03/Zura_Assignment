const { model, Schema } = require('mongoose')
const subProjectSchema = Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status:{type:Boolean,default:true}
}, {
    timestamps: true,
    versionKey: false, // Disable the version key
})

const SubProjectModel = model('subproject', subProjectSchema)

module.exports={SubProjectModel}