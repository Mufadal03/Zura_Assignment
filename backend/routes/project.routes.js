const { Router } = require('express')
const { createProject, getProjects, deleteProject, getSingleProject } = require('../controllers/project.controller')
projectRoutes = Router()

// Creating Project
projectRoutes.post('/create', createProject)

// Getting all projects
projectRoutes.get('/', getProjects)

// Getting Single Project
projectRoutes.get('/:id', getSingleProject)

// Deleting Project
projectRoutes.delete('/delete/:id',deleteProject)

module.exports={projectRoutes}