import React, { useState } from 'react';
import loginimg from '../assets/loginimg.png';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';
import { URL } from '../url';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleRegister = async () => {
        setError(""); // Clear previous errors
        try {
            const res = await axios.post(`${URL}/api/auth/register`, {
                username,
                email,
                password,
            }); 
            setUsername(res.data.username)
            setEmail(res.data.email)
            setPassword(res.data.password)
            setError("")
            navigate("/login")
        } 
        catch (e) {
            console.error(e);
            if (e.response) {
                // Server responded with a status other than 200 range
                setError(e.response.data.message || "Registration failed.");
            } else {
                // Network error or other issues
                setError("Network error. Please try again.");
            }
        }
    };

    return (
        <>
            <div>
                <h1 className="flex items-center justify-center my-4 font-black text-4xl md:text-6xl lg:text-8xl hover:scale-110 transform transition-transform duration-300">
                    <Link to="/" style={{ color: '#00897b' }}>AdWeGo</Link>
                </h1>
            </div>
            <div className="flex items-center justify-center h-fit w-full px-5 sm:px-0">
                <div className="flex bg-white rounded-lg overflow-hidden max-w-sm lg:max-w-4xl w-full">
                    <div
                        className="hidden md:block lg:w-1/2 bg-cover"
                        style={{ backgroundImage: `url(${loginimg})` }}
                    ></div>
                    <div className="w-full p-8 lg:w-1/2">
                        <p className="text-xl text-gray-600 text-center font-bold">Register</p>

                        {error && <p className="text-red-500 text-center">{error}</p>}

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                                type="text"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">E-mail Address</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                                type="email"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                                type="password"
                                required
                            />
                        </div>

                        <div className="mt-8 transition duration-300 ease-in-out transform hover:scale-105">
                            <button
                                onClick={handleRegister}
                                className="bg-teal-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-teal-600"
                            >
                                Register
                            </button>
                        </div>

                        <div className="mt-4 flex items-center w-full text-center">
                            <a href="#" className="text-xs text-gray-500 capitalize text-center w-full">
                                Already have an account!
                                <span className="text-teal-700">
                                    <Link to="/login"> Login</Link>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
