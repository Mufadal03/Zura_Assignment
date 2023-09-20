const { ProjectModel } = require("../models/project.model")
const { SubProjectModel } = require("../models/subproject.model")

// Creating subProject :-
const createSubproject = async (req, res) => {
    // Getting name and description from request body to fill the required field 
    const { name, description } = req.body

    // Getting projectId from request params to save subProject reference Id
    const { projectId } = req.params

    try {
        // Checking if the Parent Project exists or not before moving ahead
        const project = await ProjectModel.findById({ _id: projectId })
        if (!project) return res.status(404).json({ message: 'Parent project not found' });

        const newSubProject = new SubProjectModel({ name, description })
        await newSubProject.save()

        // After saving subProject into the database here we updating the subProject's reference Id to main Parent project
        project.subprojects.push(newSubProject._id)
        await project.save()

        res.status(200).send({ response: 'Subproject Created Successfully', success: true })
    } catch (error) {
        res.status(500).send({ response: `Failed to create subProject ${error.message}`, success: false })
    }

}

// Updating subProject :-
const updateSubProject = async (req, res) => {
    // As per the requirement of the problem statement we only accepting description field to update
    // Getting updated description from request body and the Id of subProject from request params to update.
    const { description } = req.body
    const { id } = req.params
    try {
        await SubProjectModel.findOneAndUpdate({ _id: id }, { description })
        res.status(200).send({ response: `Subproject updated`, success: true })
    } catch (error) {
        res.status(500).send({ response: `Failed to update subProject ${error.message}`, success: false })
    }
}

// Delete subProject :-
const deleteSubProject = async (req, res) => {
    // Getting subProjectId from request params
    const { id } = req.params
    try {
        // Finding subProject by ID given and deleting
        await SubProjectModel.findByIdAndDelete({ _id: id })

        // Updating the parent Project where this subProject was referenced by deleting the reference id.
        await ProjectModel.updateMany({ subprojects: id }, { $pull: { subprojects: id } })

        res.status(200).send({response:'SubProject deleted successfully',success:true})
    } catch (error) {
        res.status(500).send({response:`Failed to delete ${error.message}`,success:false})
    }
}
module.exports = { createSubproject, updateSubProject , deleteSubProject}