import React, { useState, useEffect } from 'react';
import './UpdateProject.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProject = () => {
    const { projectId } = useParams();
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [techStacks, setTechStacks] = useState([]);
    const [type, setType] = useState('');
    const [link, setLink] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    

    const fetchProject = async () => {
        try {
            const token = localStorage.getItem('auth-token');
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/projects/${projectId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = res.data.project;
            console.log(data);
            // Assuming the response data has the same keys as your state variables
            setName(data.name);
            setImage(data.image);
            setTechStacks(data.techStacks || []); // Ensure techStacks is an array
            setType(data.type);
            setLink(data.link);
            // Log the new name immediately after setting it
            console.log("Fetched name:", data.name); // This will show the updated name
        } catch (error) {
            console.error("Error fetching project:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProject();
    }, [projectId]);
 
    console.log(name)
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'techStacks') {
            setTechStacks(value.split(',').map(item => item.trim())); // Convert string to array
        } else {
            switch (name) {
                case 'name':
                    setName(value);
                    break;
                case 'image':
                    setImage(value);
                    break;
                case 'type':
                    setType(value);
                    break;
                case 'link':
                    setLink(value);
                    break;
                default:
                    break;
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const projectData = {
            name,
            image,
            techStacks,
            type,
            link,
        };
        
        try {
            const token = localStorage.getItem('auth-token');
            await axios.put(`${process.env.REACT_APP_API_URL}/api/v1/projects/${projectId}`, projectData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            navigate('/'); // Redirect after updating
        } catch (error) {
            console.error('Failed to update project', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading message while data is being fetched
    }

    return (
        <div className="bg-white border border-4 rounded-lg shadow relative m-10">
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">Update Project</h3>
          </div>
    
          <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Project Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Project"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="type" className="text-sm font-medium text-gray-900 block mb-2">Project Track</label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    value={type}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Type"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="image" className="text-sm font-medium text-gray-900 block mb-2">Project Photo</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    value={image}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Image URL"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="link" className="text-sm font-medium text-gray-900 block mb-2">Link Project</label>
                  <input
                    type="text"
                    name="link"
                    id="link"
                    value={link}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Link Source Code"
                    required
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="techStacks" className="text-sm font-medium text-gray-900 block mb-2">Tech Stacks</label>
                  <textarea
                    name="techStacks"
                    id="techStacks"
                    value={techStacks.join(', ')} // Join the array for display
                    onChange={handleChange}
                    rows="6"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                    placeholder="Comma-separated list of tech stacks"
                  />
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 rounded-b">
                <button
                  className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Update Project
                </button>
              </div>
            </form>
          </div>
        </div>
      );
};

export default UpdateProject;
