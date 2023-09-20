const { model, Schema } = require('mongoose')

const projectSchema = Schema({
    name: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    subprojects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subproject' }],
}, {
    timestamps: true,
    versionKey: false, // Disable the version key
})

const ProjectModel = model('project',projectSchema)