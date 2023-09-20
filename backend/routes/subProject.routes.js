const { Router } = require('express')
const { createSubproject, updateSubProject, deleteSubProject } = require('../controllers/subprojects.controller')
subProjectRoutes = Router()

subProjectRoutes.post('/create/:projectId', createSubproject)
subProjectRoutes.patch('/edit/:id',updateSubProject)
subProjectRoutes.delete('/delete/:id',deleteSubProject)
module.exports={subProjectRoutes} 