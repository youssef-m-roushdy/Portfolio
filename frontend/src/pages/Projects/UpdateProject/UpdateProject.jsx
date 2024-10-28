import React, { useState } from 'react'
import'./UpdateProject.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateProject = () => {
    const [projectData, setProjectData] = useState({
        name: '',
        image: '',
        techStacks: [],
        type: '',
        link: ''
      });
      const navigate = useNavigate();
    
      
    
      const handleChange = (e) => {
        setProjectData({ ...projectData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const token = localStorage.getItem('token');
          await axios.put(`${process.env.REACT_APP_API_URL}/api/v1/projects`, projectData, {
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
        <div className="bg-white border border-4 rounded-lg shadow relative m-10">
    
                <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold">
                        Add New project
                    </h3>
                </div>
    
    
                <div className="p-6 space-y-6">
                    <form onSubmit={() => ''}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Prject Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="Project"
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Project Track</label>
                                <input
                                    type="text"
                                    name="type"
                                    id="type"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="Type"
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Project Photo</label>
                                <input
                                    type="text"
                                    name="image"
                                    id="image"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="Image URL"
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Link Project</label>
                                <input
                                    type="text"
                                    name="link"
                                    id="link"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="Link Source Code"
                                    required
                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Tech Stacks</label>
                                <textarea
                                    id="product-details"
                                    rows="6"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                    placeholder="Details"
                                ></textarea>
                            </div>
                        </div>
                    </form>
                </div>
    
                {/* Footer */}
                <div className="p-6 border-t border-gray-200 rounded-b">
                    <button
                        className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        type="submit"
                    >
                        Add Project
                    </button>
                </div>
            </div>
        );
}

export default UpdateProject