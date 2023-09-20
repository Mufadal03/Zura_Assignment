const { Router } = require('express')
const { createProject, getProjects, deleteProject } = require('../controllers/project.controller')
projectRoutes = Router()

projectRoutes.post('/create', createProject)
projectRoutes.get('/', getProjects)
projectRoutes.delete('/delete/:id',deleteProject)

module.exports={projectRoutes}