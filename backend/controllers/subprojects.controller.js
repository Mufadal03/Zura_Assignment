const { ProjectModel } = require("../models/project.model")
const { SubProjectModel } = require("../models/subproject.model")

const createSubproject = async (req, res) => {
    const { name, description } = req.body
    const { projectId } = req.params

    try {
        const project = await ProjectModel.findById({ _id: projectId })
        if (!project) return res.status(404).json({ message: 'Parent project not found' });

        const newSubProject = new SubProjectModel({ name, description })
        await newSubProject.save()
        project.subprojects.push(newSubProject._id)
        await project.save()

        res.status(200).send({ response: 'Subproject Created Successfully', success: true })
    } catch (error) {
        res.status(500).send({ response: `Failed to create subProject ${error.message}`, success: false })
    }

}

const updateSubProject = async (req, res) => {
    const { description } = req.body
    const { id } = req.params
    try {
        await SubProjectModel.findOneAndUpdate({ _id: id }, { description })
        res.status(200).send({ response: `Subproject updated`, success: true })
    } catch (error) {
        res.status(500).send({ response: `Failed to update subProject ${error.message}`, success: false })
    }
}

const deleteSubProject = async (req, res) => {
    const { id } = req.params
    try {
        const result = await SubProjectModel.findByIdAndDelete({_id:id})
        console.log(result)
        await ProjectModel.updateMany({ subprojects: id }, { $pull: { subprojects: id } })
        res.status(200).send({response:'SubProject deleted successfully',success:true})
    } catch (error) {
        res.status(500).send({response:`Failed to delete ${error.message}`,success:false})
    }
}
module.exports = { createSubproject, updateSubProject , deleteSubProject}