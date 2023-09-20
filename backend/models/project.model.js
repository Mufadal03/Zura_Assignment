const mongoose = require('mongoose')
const { model, Schema } = mongoose

const projectSchema = Schema({
    name: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    subprojects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubProject' }],
}, {
    timestamps: true,
    versionKey: false, // Disable the version key
})

const ProjectModel = model('project', projectSchema)
module.exports={ProjectModel}