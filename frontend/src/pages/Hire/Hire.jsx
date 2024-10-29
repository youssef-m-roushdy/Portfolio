import React, { useEffect, useState } from 'react';
import './Hire.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Hire = () => {
    const [hireOffers, setHireOffers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getHireOffers = async () => {
            try {
                const token = localStorage.getItem('auth-token');
                if (!token) navigate('/');
                
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/hires`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setHireOffers(res.data.hires || []);
            } catch (error) {
                console.error("Error fetching hire offers:", error);
                setHireOffers([]); // Fallback to an empty array on error
            }
        };
        getHireOffers();
    }, [navigate]);

    if (hireOffers.length > 0) {
        return (
            <div className="flex flex-col">
                <h1 className="hire-title py-5 pl-12">Hire Offer List</h1>
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
                                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Number</th>
                                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Position</th>
                                        <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {hireOffers.map((offer, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{offer.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{offer.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{offer.number}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{offer.position}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                {new Date(offer.createdAt).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    second: "2-digit"
                                                })}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                <Link to={`/offer-details/${offer._id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Details</Link>
                                                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Agree</button>
                                                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Refuse</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <p>No hire offers available</p>;
    }
};

export default Hire;
