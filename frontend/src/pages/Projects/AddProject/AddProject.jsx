// ProjectEdit.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import'./AddProject.css'

const AddProject = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/projects', projectData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/');
    } catch (error) {
      console.error('Failed to add or update project', error);
    }
  };

  return (
    <div>
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={projectData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image url"
          value={projectData.image}
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="techStacks"
          placeholder="Tech Stacks"
          value={projectData.techStacks}
          onChange={handleChange}
        />
        <input
          type="text"
          name="techStacks"
          placeholder="Tech Stacks"
          value={projectData.techStacks}
          onChange={handleChange}
        />
        <input
          type="text"
          name="link"
          placeholder="Link"
          value={projectData.techStacks}
          onChange={handleChange}
        />
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProject;
