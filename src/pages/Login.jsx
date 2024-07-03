import React, { useContext, useState } from 'react'
import loginimg from '../assets/loginimg.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { URL } from '../url';   
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = async() => {
        setError(""); // Clear previous errors
        try {
            const res = await axios.post(`${URL}/api/auth/login`, {
                email,
                password,
            },{withCredentials:true}); 
            setUser(res.data)
            setError("")
            navigate("/")
        } 
        catch (e) {
            console.error(e);
            if (e.response) {
                // Server responded with a status other than 200 range
                setError(e.response.data.message || "Wrong Credentials.");
            } else {
                // Network error or other issues
                setError("Network error. Please try again.");
            }
        }
    }

    return (
        <>
            <Navbar/>
            <div className="flex items-center justify-center h-fit w-full px-5 sm:px-0">
                <div className="flex bg-white rounded-lg  overflow-hidden max-w-sm lg:max-w-4xl w-full">
                    <div
                        className="hidden md:block lg:w-1/2 bg-cover"
                        style={{
                            backgroundImage: `url(${loginimg})`,
                        }}
                    ></div>
                    <div className="w-full p-8 lg:w-1/2">
                        <p className="text-xl text-gray-600 text-center font-bold">Login</p>
                        {error && <p className="text-red-500 text-center">{error}</p>}

                        <div className="mt-4"><label className="block text-gray-700 text-sm font-bold mb-2">E-mail Address</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                                type="email"
                                required
                            />
                        </div>

                        <div className="mt-4"><label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                                type="password"
                                required
                            />
                        </div>

                        <div className="mt-8 transition duration-300 ease-in-out transform hover:scale-105">
                            <button 
                                onClick={handleLogin}
                                className="bg-teal-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-teal-600">
                                Login
                            </button>
                        </div>

                        <div className="mt-4 flex items-center w-full text-center">
                            <a
                                href="#"
                                className="text-xs text-gray-500 capitalize text-center w-full"
                            >
                                Don&apos;t have any account yet?
                                <span className="text-teal-700"> <Link to='/register'>Register</Link></span>
                            </a>
                            <br /><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Login