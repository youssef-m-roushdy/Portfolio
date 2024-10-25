const Project = require("../models/project");
const { validationResult } = require("express-validator");

// Create a new project
createProject = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, image, techStacks, type, link } = req.body;

    const newProject = new Project({
      name,
      image,
      techStacks,
      type,
      link,
    });

    await newProject.save();

    res.status(201).json({
      message: "Project created successfully",
      project: newProject,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Get all projects
getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Get a project by ID
getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ project });
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Update a project
updateProject = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, image, techStacks, link } = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { name, image, techStacks, link },
      { new: true } // Return the updated document
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// Delete a project
deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
