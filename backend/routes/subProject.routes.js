const { Router } = require('express')
const { createSubproject, updateSubProject, deleteSubProject, getSubProject } = require('../controllers/subprojects.controller')
subProjectRoutes = Router()

// Creating subProject
subProjectRoutes.post('/create/:projectId', createSubproject)

// Updating subProject
subProjectRoutes.patch('/edit/:id', updateSubProject)

// Deleting subProject
subProjectRoutes.delete('/delete/:id', deleteSubProject)

subProjectRoutes.get('/:id', getSubProject)

module.exports={subProjectRoutes} 