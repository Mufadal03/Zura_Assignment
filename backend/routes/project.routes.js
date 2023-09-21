const { Router } = require('express')
const { createProject, getProjects, deleteProject, getSingleProject } = require('../controllers/project.controller')
const { authenticator } = require('../middlewares/authenticator')
projectRoutes = Router()

// Creating Project
projectRoutes.post('/create',authenticator, createProject)

// Getting all projects
projectRoutes.get('/',authenticator, getProjects)

// Getting Single Project
projectRoutes.get('/:id', authenticator,getSingleProject)

// Deleting Project
projectRoutes.delete('/delete/:id',authenticator,deleteProject)

module.exports={projectRoutes}