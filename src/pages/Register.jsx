import React from 'react'
import loginimg from '../assets/loginimg.png'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Register() {
    return (
        <>
            <div>
                <h1 className='flex items-center justify-center my-4 font-black text-4xl md:text-6xl lg:text-8xl hover:scale-110 transform transition-transform duration-300'>
                    <Link to="/" style={{ color: '#00897b' }}>AdWeGo</Link>
                </h1>
            </div>
            <div className="flex items-center justify-center h-fit w-full px-5 sm:px-0">
                <div className="flex bg-white rounded-lg  overflow-hidden max-w-sm lg:max-w-4xl w-full">
                    <div
                        className="hidden md:block lg:w-1/2 bg-cover"
                        style={{
                            backgroundImage: `url(${loginimg})`,
                        }}
                    ></div>
                    <div className="w-full p-8 lg:w-1/2">
                        <p className="text-xl text-gray-600 text-center font-bold">Register</p>

                        <div className="mt-4"><label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                            <input
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                                type="text"
                                required
                            />
                        </div>

                        <div className="mt-4"><label className="block text-gray-700 text-sm font-bold mb-2">E-mail Address</label>
                            <input
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                                type="email"
                                required
                            />
                        </div>

                        <div className="mt-4"><label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                                type="password"
                                required
                            />
                        </div>

                        <div className="mt-8 transition duration-300 ease-in-out transform hover:scale-105">
                            <button className="bg-teal-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-teal-600">
                                Register
                            </button>
                        </div>

                        <div className="mt-4 flex items-center w-full text-center">
                            <a
                                href="#"
                                className="text-xs text-gray-500 capitalize text-center w-full"
                            >
                                Already have an account!
                                <span className="text-teal-700"> <Link to='/login'>Login</Link></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Register