import React, { useContext } from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { URL } from '../url';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function Comment({c,post}) {

    const {user} = useContext(UserContext)

    const handleDelete = async(id) => {
        try {
            await axios.delete(`${URL}/api/comments/${id}`, {withCredentials:true})
            window.location.reload(true)
        } 
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {/* Sample Comment */}
            <div className="bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex items-center mb-2">
                    <div className="flex items-center">
                        <div className="mr-2">
                            <FaRegUserCircle className="text-teal-700 text-2xl" />
                        </div>
                        <p className="font-bold text-lg">{c.author}</p>
                    </div>
                    {user?._id === c?.userId ?
                    <div className="ml-auto flex space-x-2">
                        <button 
                            onClick={() => handleDelete(c._id)}
                            className="bg-teal-700 hover:bg-red-600 hover:scale-105 transform transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded">
                            <MdDelete />
                        </button>
                    </div>:""}
                </div>
                <p className="text-gray-700">{c.comment}</p>
            </div>
        </div>
    )
}

export default Comment