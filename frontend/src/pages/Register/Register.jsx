import React, { useState } from 'react';
import './Register.css'
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });


    const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }
        
        setLoading(true);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1/auth/register`,
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response.data)
            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <ToastContainer />
        <section className="grid text-center h-screen items-center p-8">
            <div>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Sign Up
                </Typography>
                <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                    Create an account
                </Typography>
                <form onSubmit={handleSubmit} className="mx-auto max-w-[24rem] text-left">
                    <div className="mb-6">
                        <label htmlFor="name">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Enter Your Name
                            </Typography>
                        </label>
                        <Input
                            id="name"
                            color="gray"
                            size="lg"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Enter Email
                            </Typography>
                        </label>
                        <Input
                            id="email"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"
                            placeholder="name@mail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>

                    <div className="mb-6 password">
                        <label htmlFor="password">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Password
                            </Typography>
                        </label>
                        <Input
                            size="lg"
                            placeholder="********"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            type={passwordShown ? "text" : "password"}
                        />
                        <div className="visibility-icon" onClick={togglePasswordVisibility}>
                            {passwordShown ? (
                                <EyeIcon className="h-6 w-6" />
                            ) : (
                                <EyeSlashIcon className="h-6 w-6" />
                            )}
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmPassword">
                            <Typography
                                variant="small"
                                className="mb-2 block font-medium text-gray-900"
                            >
                                Confirm Password
                            </Typography>
                        </label>
                        <Input
                            size="lg"
                            placeholder="********"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            type="password"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        disabled={loading}
                    >
                        {loading ? "Signing up..." : "Signup"}
                    </Button>
                    <Typography variant="h3" color="blue-gray" className="mt-3 text-start">
                    <Link to="/login" className='text-start'>Signin Now</Link>
                </Typography>
                </form>
                
            </div>
        </section>
        </>
    );
};

export default Register;
