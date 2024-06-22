import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileAds from '../components/ProfileAds';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function Profile() {
    const [showAds, setShowAds] = useState(false);

    const toggleAds = () => {
        setShowAds(!showAds); // Toggle the showAds state
    };

    return (
        <div className="flex flex-col items-center">
            <Navbar />
            <button
                className=" text-gray-600 border-2 text-xl font-bold py-2 px-24 hover:scale-110 transform transition-transform duration-300 m-4"
                onClick={toggleAds}>
                {showAds ? (
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                        Hide Ads &nbsp; <FaArrowUp />
                    </div>
                ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                        Show my Ads &nbsp; <FaArrowDown />
                    </div>
                )}

            </button>
            {showAds && (
                <>
                    <ProfileAds />
                    <ProfileAds />
                </>
            )}
            <hr style={{ width: '80%', margin: '20px auto', borderTop: '1px solid #ccc' }} />
            <div className="w-full p-8 lg:w-1/2">
                <p className="text-xl text-gray-600 text-center font-bold">Update your profile</p>

                <div className="mt-4"><label className="block text-gray-700 text-sm font-bold mb-2">New Username</label>
                    <input
                        className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                        type="text"
                        required
                    />
                </div>

                <div className="mt-4"><label className="block text-gray-700 text-sm font-bold mb-2">New E-mail Address</label>
                    <input
                        className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                        type="email"
                        required
                    />
                </div>

                <div className="mt-4"><label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
                    <input
                        className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                        type="password"
                        required
                    />
                </div>

                <div className="mt-8 flex space-x-4">
                    <div className="transition duration-300 ease-in-out transform hover:scale-105">
                        <button className="bg-teal-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-teal-600">
                            Update
                        </button>
                    </div>
                    <div className="transition duration-300 ease-in-out transform hover:scale-105">
                        <button className="bg-red-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-600">
                            Delete
                        </button>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Profile;
