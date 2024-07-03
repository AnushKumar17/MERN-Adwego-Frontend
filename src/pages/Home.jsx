import React, { useContext, useEffect, useState } from 'react';
import HomePosts from '../components/HomePosts';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { URL } from '../url';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Home() {
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);

  const {user} = useContext(UserContext)

  const { search } = useLocation();

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${URL}/api/adds/${search}`);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPosts()
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="mx-16">
        {loader ? (
          <svg class="animate-spin h-16 w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
        ) : (
          !noResults ? (
            posts.map((post) => (
              <>
              <Link to={user? `posts/post/${post._id}` : "/login"}>
              <HomePosts key={post._id} post={post} />
              </Link>
              </>
            ))
          ) : (
            <span className="text-center font-bold">No advertisements found!</span>
          )
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
