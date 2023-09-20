const { ProjectModel } = require("../models/project.model")

// Create Project :-
const createProject = async (req, res) => {
    //Getting project Name and CreatedBy (UserId) to keep track of projects of a particular User.
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
            response: "Project creation failed",
            success:false
        })
    }
}

// Get Projects :-
const getProjects = async (req, res) => {
    // Getting createBy (UserId) to get all projects of that user
    const { createdBy } = req.body
    try {
        // Getting projects and populating the subproject field by its reference subProjectId.
        const projects = await ProjectModel.find({createdBy}).populate('subprojects')
        res.status(200).send({response:projects,success:true})
    } catch (error) {
        res.status(500).send({response:`Failed to find Project ${error.message}`,success:false})
    }
}

// Get Single Project :-
const getSingleProject = async (req, res) => {
    // Getting id (ProjectId) from params and createdBy (UserId) from request body to Fetch single project from the DB
    const { id } = req.params
    const { createdBy } = req.body
    try {
        const project = await ProjectModel.find({ _id: id, createdBy }).populate('subprojects')
        res.status(200).send({ response: project, success: true })
    } catch (error) {
        res.status(500).send({ response: `Failed to get project ${error.message}`, success: false })
    }
}

// Delete Project :-
const deleteProject = async (req, res) => {
    // Getting projectId to perform Delete Operation
    const { id } = req.params
    try {
        const response = await ProjectModel.deleteOne({ _id: id })

        // Checking if project doc delete or not by verifying the deleteCount 
        if (response.deletedCount !== 0) res.status(200).send({ response: `Project Deleted`, success: true })
        else res.status(500).send({ response: `Failed to delete project ${error.message}`, success: false })
        
    } catch (error) {
        res.status(500).send({response:`Failed to delete project ${error.message}`,success:false})
    }
}

module.exports={createProject,getProjects,deleteProject,getSingleProject}