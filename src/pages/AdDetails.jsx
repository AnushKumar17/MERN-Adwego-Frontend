import React from 'react';
import { Link } from "react-router-dom"
import { MdEdit, MdDelete } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Comment from '../components/Comment';
import Footer from '../components/Footer';

const AdDetails = () => {
    return (
        <>
            <div className="px-4 md:px-8 lg:px-32">
                <h1 className='flex items-center justify-center my-4 font-black text-4xl md:text-6xl lg:text-8xl hover:scale-110 transform transition-transform duration-300'>
                    <Link to="/" style={{ color: '#00897b' }}>AdweGo</Link>
                </h1>
            </div>
            <div className="mx-8 px-4 py-8 sm:px-6 lg:px-2">
                <div className="bg-white overflow-hidden">
                    {/* Ad Title and Seller */}
                    <div className="px-4 py-3 sm:px-6">
                        <h2 className="text-3xl font-bold mb-2" style={{ color: '#00897b' }}>Title</h2>
                        <p className="text-gray-600">Author</p>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        {/* Left Column */}
                        <div className="lg:w-2/3 lg:pr-2">


                            {/* Ad Image */}
                            <div className="px-2 py-3 sm:p-6">
                                <img src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.webp?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" alt="Ad" className="rounded-lg shadow-md w-full" />
                            </div>

                            {/* Ad Description */}
                            <div className="px-4 py-5 sm:px-6">
                                <p className="text-lg leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                                    vestibulum...
                                </p>
                            </div>

                            {/* Edit and Delete Icons (if applicable to ads) */}
                            <div className="px-4 py-5 sm:px-6 flex items-center">
                                <button className="bg-teal-700 hover:bg-green-600 hover:scale-105 transform transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded mr-2">
                                    <MdEdit />
                                </button>
                                <button className="bg-teal-700 hover:bg-red-600 hover:scale-105 transform transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded">
                                    <MdDelete />
                                </button>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:w-1/3 lg:pl-4">
                            {/* Categories */}
                            <div className="px-4 py-5 sm:px-6">
                                <h2 className="text-2xl font-bold mb-5">Categories : </h2>
                                <ul className="flex flex-wrap">
                                    <li className="bg-gray-400 text-white py-2 px-2 m-2 rounded w-[calc(50%-16px)] flex justify-center items-center">Category 1</li>
                                    <li className="bg-gray-400 text-white py-2 px-2 m-2 rounded w-[calc(50%-16px)] flex justify-center items-center">Category 2</li>
                                    <li className="bg-gray-400 text-white py-2 px-2 m-2 rounded w-[calc(50%-16px)] flex justify-center items-center">Category 3</li>
                                </ul>
                            </div>


                            {/* Comments Section */}
                            <div className="px-4 py-5 sm:px-6">
                                <h2 className="text-2xl font-bold mb-4">Comments :</h2>

                                <Comment />
                                <Comment />

                                {/* Add Comment Input */}
                                <div className="flex items-center">
                                    <div className="flex-1 mr-2">
                                        <input
                                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                                            type="text"
                                            placeholder="Write a comment"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <button className="bg-teal-700 text-white font-bold py-2 px-4 rounded hover:bg-teal-600">
                                            Comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AdDetails;
