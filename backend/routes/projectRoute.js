const express = require('express');
const projectController = require('../controllers/projectController');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

// Public routes (Anyone can view)
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);

// Protected routes (Only admins can add, update, or delete projects)
router.post('/', authenticateJWT, adminMiddleware, projectController.createProject);
router.put('/:id', authenticateJWT, adminMiddleware, projectController.updateProject);
router.delete('/:id', authenticateJWT, adminMiddleware, projectController.deleteProject);

module.exports = router;
