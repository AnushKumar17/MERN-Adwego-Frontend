import React from 'react';

function ProflleAds() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-1/2 px-4 mb-8">
        <div className="flex flex-col rounded-lg bg-white border border-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:flex-row transition duration-300 ease-in-out transform hover:scale-105">
          <img
            className="h-60 md:h-auto md:w-48 md:rounded-l-lg object-cover rounded-t-lg"
            src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start p-4">
            <h5 className="mb-2 text-xl font-medium text-black">
              Card title
            </h5>
            <p className="mb-4 text-base text-gray-800">
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </p>
            <p className="text-xs text-gray-700">
              - Author
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProflleAds;
