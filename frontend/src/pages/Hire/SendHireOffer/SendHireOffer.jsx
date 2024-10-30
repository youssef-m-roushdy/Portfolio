import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SendHireOffer = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [number, setNumber] = useState('');
  const [offerMessage, setOfferMessage] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/hires`,
        {
          name,
          company,
          email,
          position,
          number,
          offerMessage,
        }
      );
      navigate('/')
      console.log(response.data)
    } catch (error) {
      // Handle any error that may occur during the request
      console.log(error)
      // Optionally, display an error message to the user here
    }
  };

  return (
    <div className="bg-white border border-4 rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">Send Hire Offer</h3>
      </div>

      <div className="p-6 space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="number" className="text-sm font-medium text-gray-900 block mb-2">Contact Number</label>
              <input
                type="text"
                name="number"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Contact Number"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="company" className="text-sm font-medium text-gray-900 block mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="position" className="text-sm font-medium text-gray-900 block mb-2">Position Offer</label>
              <input
                name="position"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                rows="4"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Position Offer"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="offerMessage" className="text-sm font-medium text-gray-900 block mb-2">Offer Message</label>
              <textarea
                name="offerMessage"
                id="offerMessage"
                value={offerMessage}
                onChange={(e) => setOfferMessage(e.target.value)}
                rows="6"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Enter your offer message here"
              ></textarea>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 rounded-b">
            <button
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Send Offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendHireOffer;
