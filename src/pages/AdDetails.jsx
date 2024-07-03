import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom"
import { MdEdit, MdDelete } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import { URL } from '../url';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const AdDetails = () => {

    const {user} = useContext(UserContext)

    const [add, setAdd] = useState({})
    const [comments,setComments] = useState([])
    const [comment,setComment] = useState("")

    const addID = useParams().id;

    const navigate = useNavigate()

    const fetchPost = async () => {
        try {
            const res = await axios.get(`${URL}/api/adds/${addID}`)
            setAdd(res.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const fetchComments = async() => {
        try {
            const res = await axios.get(`${URL}/api/comments/post/${addID}`)
            setComments(res.data)
        } 
        catch (error) {
            console.log(error)
        }
    }

    const handleDeleteAdd = async() => {
        try {
            await axios.delete(`${URL}/api/adds/${addID}`,{withCredentials:true})
            navigate("/")
        } 
        catch (error) {
            console.log(error)
        }
    }

    const createComment = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${URL}/api/comments/create`,{ comment: comment, author: user.username, postId: addID, userId: user._id },{ withCredentials: true })
            window.location.reload(true)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchPost()
        fetchComments()
        window.scrollTo(0, 0);
    }, [addID])

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
                        <h2 className="text-3xl font-bold mb-2" style={{ color: '#00897b' }}>{add.title}</h2>
                        <p className="text-gray-600">{add.username}</p>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        {/* Left Column */}
                        <div className="lg:w-2/3 lg:pr-2">


                            {/* Ad Image */}
                            <div className="px-2 py-3 sm:p-6">
                                <img src={add.photo} alt="Ad" className="rounded-lg shadow-md w-full" />
                            </div>

                            {/* Ad Description */}
                            <div className="px-4 py-5 sm:px-6">
                                <p className="text-lg leading-relaxed">
                                    {add.desc}
                                </p>
                            </div>

                            {/* Edit and Delete Icons (if applicable to ads) */}
                            {user?._id === add?.userId && <div className="px-4 py-5 sm:px-6 flex items-center">
                                <button className="bg-teal-700 hover:bg-green-600 hover:scale-105 transform transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded mr-2">
                                    <MdEdit onClick={() => navigate("/edit/"+addID)}/>
                                </button>
                                <button onClick={handleDeleteAdd} className="bg-teal-700 hover:bg-red-600 hover:scale-105 transform transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded">
                                    <MdDelete />
                                </button>
                            </div>}
                            
                        </div>

                        {/* Right Column */}
                        <div className="lg:w-1/3 lg:pl-4">
                            {/* Categories */}
                            <div className="px-4 py-5 sm:px-6">
                                <h2 className="text-2xl font-bold mb-5">Categories : </h2>
                                <ul className="flex flex-wrap">
                                    {add.categories?.map((c, i) => (
                                        <li key={i} className="bg-gray-400 text-white py-2 px-2 m-2 rounded w-[calc(50%-16px)] flex justify-center items-center">{c}</li>
                                    ))}
                                </ul>
                            </div>



                            {/* Comments Section */}
                            <div className="px-4 py-5 sm:px-6">
                                <h2 className="text-2xl font-bold mb-4">Comments :</h2>

                                {comments?.map((c) => (
                                    <Comment key={c._id} c={c} post={add} />
                                ))}

                                {/* Add Comment Input */}
                                <div className="flex items-center">
                                    <div className="flex-1 mr-2">
                                        <input
                                            onChange={(e) => setComment(e.target.value)}
                                            className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                                            type="text"
                                            placeholder="Write a comment"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <button 
                                            onClick={createComment}
                                            className="bg-teal-700 text-white font-bold py-2 px-4 rounded hover:bg-teal-600">
                                            Comment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdDetails;
