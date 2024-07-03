import React, { useContext,useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom"
import { MdDelete } from "react-icons/md";
import Footer from '../components/Footer';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import { URL } from '../url';

function EditAd() {

    window.scrollTo(0, 0);

    const navigate = useNavigate()

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [imag, setImag] = useState('');
    const { user } = useContext(UserContext);

    const [cat, setCat] = useState("")
    const [cats, setCats] = useState([])

    const addID = useParams().id;

    const fetchPost = async () => {
        try {
        const res = await axios.get(`${URL}/api/adds/${addID}`)
          setTitle(res.data.title)
          setDesc(res.data.desc)
          setImag(res.data.photo)
          setCats(res.data.categories)
    
        }
        catch (err) {
          console.log(err)
        }
      }

    const addCategory = () => {
        let updatedCats = [...cats]
        updatedCats.push(cat);
        setCat("")
        setCats(updatedCats)
    }

    const deleteCategory = (index) => {
        // Filter out the item with the given index
        const updatedCats = cats.filter((_, i) => i !== index);
        setCats(updatedCats);
    }

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleUpdate = async(e) => {
        try {
            e.preventDefault();
        setLoading(true);
        setMessage('');

        const advertisement = {
            title,
            desc,
            photo: imag,
            username: user.username,
            userId: user._id,
            categories: cats
        };

        try {
            const res = await axios.put(`${URL}/api/adds/${addID}`, advertisement, { withCredentials: true });
            if (res.status === 200) {
                navigate("/adds/"+res.data._id)
                // Clear input fields
                setTitle('');
                setDesc('');
                setImag('');
                setCats([]);
                navigate('/');
            } else {
                setMessage('Unexpected response from the server.');
            }
        } catch (error) {
            setMessage('Error creating advertisement. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
        } 
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPost()
        window.scrollTo(0, 0);
    }, [addID])

    return (
        <div>
            <div className="px-4 md:px-8 lg:px-32">
                <h1 className='flex items-center justify-center my-4 font-black text-4xl md:text-6xl lg:text-8xl hover:scale-110 transform transition-transform duration-300'>
                    <Link to="/" style={{ color: '#00897b' }}>AdweGo</Link>
                </h1>
            </div>

            <div className='w-full  mx-auto p-8 lg:p-16'>
                <p className="text-3xl text-center font-bold underline underline-offset-8 text-gray-700">Update your Advertisement</p>

                {/* Title and Image Link on the same row */}
                <div className="mt-4 flex flex-wrap gap-4">
                    {/* Title */}
                    <div className="flex-1">
                        <label className="block text-gray-700 text-lg font-bold mb-2">Title</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="text-gray-700 border border-gray-300 rounded py-1 text-sm px-4 block w-full focus:outline-2 focus:outline-teal-700"
                            type="text"
                            required
                        />
                    </div>
                    {/* Image Link */}
                    <div className="flex-1">
                        <label className="block text-gray-700 text-lg font-bold mb-2">Image Link</label>
                        <input
                            value={imag}
                            onChange={(e) => setImag(e.target.value)}
                            className="text-gray-700 border border-gray-300 rounded py-1 text-sm px-4 block w-full focus:outline-2 focus:outline-teal-700"
                            type="text"
                            required
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="mt-2">
                    <label className="block text-gray-700 text-lg font-bold mb-2">Description</label>
                    <textarea 
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="text-gray-700 border border-gray-300 rounded py-1 text-sm px-4 block w-full h-32 focus:outline-2 focus:outline-teal-700"
                        required
                    ></textarea>
                </div>
                {/* Categories */}
                <label className="block text-gray-700 text-lg font-bold mt-2 mb-0 md:mb-0 md:mr-2">Categories</label>
                <div className="flex flex-col md:flex-row items-center">

                    <div className="flex items-center w-full mt-0 md:w-auto">
                        <input
                            value={cat} onChange={(e) => setCat(e.target.value)}
                            className="text-gray-700 border mt-0 border-gray-300 rounded py-1 text-sm px-4 block w-auto focus:outline-2 focus:outline-teal-700 mr-2 mb-2 md:mb-0"
                            type="text"
                            required
                        />
                        <button onClick={addCategory} className="bg-teal-400 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 mr-2">
                            Add
                        </button>
                        <ul className="flex flex-wrap">
                            {cats?.map((c, i) => (
                                <li key={i} className="bg-gray-400 text-white py-2 px-2 m-2 rounded flex items-center">
                                    <p className="mr-2">{c}</p>
                                    <button onClick={() => deleteCategory(i)} className="text-2xl hover:text-red-600 cursor-pointer hover:scale-110 transform transition-transform duration-300">
                                        <MdDelete />
                                    </button>
                                </li>
                            ))}
                        </ul>


                    </div>

                    <div className="flex flex-col md:flex-row items-center md:ml-auto mt-2 md:mt-0">
                        <button 
                            onClick={handleUpdate}
                            className="bg-teal-700 text-white text-xl font-bold py-2 px-24 rounded hover:bg-teal-600 md:ml-auto hover:scale-110 transform transition-transform duration-300">
                            Update Ad
                        </button>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default EditAd