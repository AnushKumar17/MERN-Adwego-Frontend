import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileAds from '../components/ProfileAds';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"

function Profile() {

    const param = useParams().id

    const [showAds, setShowAds] = useState(false);

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const [posts, setPosts] = useState([])

    const [updated, setUpdated] = useState(false)

    const fetchProfile = async () => {
        try {
            const res = await axios.get(`${URL}/api/users/${user._id}`)
            setUsername(res.data.username)
            setEmail(res.data.email)
            setPassword(res.data.password)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = async () => {
        setUpdated(false)
        try {
            const res = await axios.put(`${URL}/api/users/${user._id}`, { username, email, password }, { withCredentials: true })
            setUpdated(true)
        }
        catch (err) {
            console.log(err)
            setUpdated(false)
        }
    }

    const handleDelete = async() => {
        try {
            const res = await axios.delete(`${URL}/api/users/${user._id}`, { withCredentials: true })
            setUser(null)
            navigate("/")
          }
          catch (err) {
            console.log(err)
          }
    }

    const fetchUserPosts = async () => {
        try {
          const res = await axios.get(`${URL}/api/adds/user/${user._id}`)
          // console.log(res.data)
          setPosts(res.data)
        }
        catch (err) {
          console.log(err)
        }
      }

    const toggleAds = () => {
        setShowAds(!showAds); // Toggle the showAds state
    };

    useEffect(() => {
        fetchProfile()
    }, [param])

    useEffect(() => {
        fetchUserPosts()
    }, [param])

    return (
        <div className="flex flex-col items-center">
            <div>
                <h1 className='flex items-center justify-center my-4 font-black text-4xl md:text-6xl lg:text-8xl hover:scale-110 transform transition-transform duration-300'>
                    <Link to="/" style={{ color: '#00897b' }}>AdweGo</Link>
                </h1>
            </div>
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
            {showAds && posts?.map((p) => (
                <Link key={p._id} to={`/posts/post/${p._id}`}>
                    <ProfileAds p={p} />
                </Link>
            ))}
            <hr style={{ width: '80%', margin: '20px auto', borderTop: '1px solid #ccc' }} />
            <div className="w-full p-8 lg:w-1/2">
                <p className="text-xl text-gray-600 text-center font-bold">Update your profile</p>

                <div className="mt-4"><label className="block text-gray-700 text-sm font-bold mb-2">New Username</label>
                    <input
                        onChange={(e) => setUsername(e.target.value)} value={username}
                        className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                        type="text"
                        required
                    />
                </div>

                <div className="mt-4"><label className="block text-gray-700 text-sm font-bold mb-2">New E-mail Address</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)} value={email}
                        className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                        type="email"
                        required
                    />
                </div>

                <div className="mt-4"><label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)} value={password}
                        className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-teal-700"
                        type="password"
                        required
                    />
                </div>

                <div className="mt-8 flex space-x-4">
                    <div className="transition duration-300 ease-in-out transform hover:scale-105">
                        <button
                            onClick={handleUpdate}
                            className="bg-teal-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-teal-600">
                            Update
                        </button>
                    </div>
                    <div className="transition duration-300 ease-in-out transform hover:scale-105">
                        <button 
                            onClick={handleDelete}
                            className="bg-red-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-600">
                            Delete
                        </button>
                    </div>
                    {updated ? <h3 className="text-green-500 text-center">Details Updated</h3> : <h3></h3>}
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Profile;
