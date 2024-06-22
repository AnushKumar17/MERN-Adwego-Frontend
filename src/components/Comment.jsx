import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

function Comment() {
    return (
        <div>
            {/* Sample Comment */}
            <div className="bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex items-center mb-2">
                    <div className="flex items-center">
                        <div className="mr-2">
                            <FaRegUserCircle className="text-teal-700 text-2xl" />
                        </div>
                        <p className="font-bold text-lg">Author</p>
                    </div>

                    <div className="ml-auto flex space-x-2">
                        <button className="bg-teal-700 hover:bg-green-600 hover:scale-105 transform transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded mr-2">
                            <MdEdit />
                        </button>
                        <button className="bg-teal-700 hover:bg-red-600 hover:scale-105 transform transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded">
                            <MdDelete />
                        </button>
                    </div>
                </div>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
        </div>
    )
}

export default Comment