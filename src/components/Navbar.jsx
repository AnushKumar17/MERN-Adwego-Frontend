import React, { useContext , useState} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { UserContext } from '../context/UserContext';
import { URL } from '../url';
import axios from 'axios';

function Navbar() {
    const {user} = useContext(UserContext);
    const {setUser} = useContext(UserContext);

    const path = useLocation().pathname

    const navigate = useNavigate()

    const [prompt, setPrompt] = useState("")

    const handleLogout = async() => {
        try {
            const res =  await axios.get(`${URL}/api/auth/logout`,{withCredentials: true})
            setUser(null)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="px-4 md:px-8 lg:px-32">
            <div>
            <h1 className='flex items-center justify-center my-4 font-black text-4xl md:text-6xl lg:text-8xl hover:scale-110 transform transition-transform duration-300'>
                <Link to="/" style={{ color: '#00897b' }}>AdweGo</Link>
            </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 my-4 md:my-8">
                {path === "/" && <div className="flex items-center space-x-4">
                    <p 
                    onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))}
                    className="cursor-pointer"><IoSearch size={24} /></p>
                    <div className="w-full md:w-72">
                        <div className="relative w-full min-w-[200px] h-10">
                            <input
                            onChange={(e) => setPrompt(e.target.value)} 
                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                            placeholder="" />
                            <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Search
                            </label>
                        </div>
                    </div>
                </div>}
                <div className="flex items-center space-x-4">
                    {user ? <h3><Link to="/create">Create Post</Link></h3> : <h3><Link to="/login">Login</Link></h3>}
                    {user ? <h3><Link to={"/profile/"+user._id}>My Profile</Link></h3> : <h3><Link to="/register">Register</Link></h3>}
                    {user ? <h3 onClick={handleLogout}><Link to="/">Logout</Link></h3> : <h3></h3>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
