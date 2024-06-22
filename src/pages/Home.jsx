import React from 'react';
import HomePosts from '../components/HomePosts';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
    <Navbar/>
      <div className="flex flex-wrap justify-center">
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
      </div>
    <Footer/>
    </>
  );
}

export default Home;
