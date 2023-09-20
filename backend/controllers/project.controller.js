const { ProjectModel } = require("../models/project.model")

const createProject = async (req, res) => {
    const { name, createdBy } = req.body
    try {
        const newProject = new ProjectModel({
            name,
            createdBy
        })
        await newProject.save()
        res.status(201).send({
            response: "Project created successfully",
            success: true
        })
    } catch (error) {
        res.status(500).send({
            response:"Project creation failed"
        })
    }
}
const getProjects = async (req, res) => {
    const { createdBy } = req.body
    try {
        const projects = await ProjectModel.find({createdBy}).populate('subprojects')
        res.status(200).send({response:projects,success:true})
    } catch (error) {
        res.status(500).send({response:`Failed to find Project ${error.message}`,success:false})
    }
}
const deleteProject = async (req, res) => {
    const { id } = req.params
    try {
        const response = await ProjectModel.deleteOne({ _id: id })
        if (response.deletedCount !== 0) res.status(200).send({ response: `Project Deleted`, success: true })
        else res.status(500).send({ response: `Failed to delete project ${error.message}`, success: false })
    } catch (error) {
        res.status(500).send({response:`Failed to delete project ${error.message}`,success:false})
    }
}
module.exports={createProject,getProjects,deleteProject}