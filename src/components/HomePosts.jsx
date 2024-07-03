
const HomePosts = ({ post }) => {
  return (
    <div className="w-full flex flex-col md:flex-row mt-8 px-8 space-y-4 md:space-y-0 md:space-x-8">
      {/* left */}
      <div className="w-full md:w-[35%] h-[200px] flex justify-center items-center rounded-lg bg-white  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:flex-row transition duration-300 ease-in-out transform hover:scale-105">
        <img src={post.photo} alt="" className="h-full w-full object-cover rounded-lg" />
      </div>
      {/* right */}
      <div className="flex flex-col w-full md:w-[65%]">
        <h1 className="text-xl font-bold mb-1 md:mb-2 md:text-2xl">
          {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>- {post.username}</p>
        </div>
        <p className="text-sm md:text-lg">
          {post.desc.slice(0, 200)}<span className='text-gray-400 text-xs'> ...Read more</span>
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
