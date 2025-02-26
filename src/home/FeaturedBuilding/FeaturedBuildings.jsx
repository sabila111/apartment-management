import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedBuildings = () => {
    const [featuredBuildings, setFeaturedBuildings] = useState([]);
    useEffect(() => {
        fetch("https://12-assignment-server-smoky.vercel.app/featured") 
          .then((res) => res.json())
          .then((data) => {
            setFeaturedBuildings(data);
            
          });
      },[])
    return (
        <div className="container mx-auto px-4 py-8 ">
      <h2 className="text-center text-4xl font-extrabold text-cyan-700 mb-14 tracking-wide uppercase drop-shadow-md">Featured Buildings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredBuildings.map((building) => (
          <div
            key={building.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={building.image}
              alt={building.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow text-center" >
              <h3 className="text-2xl font-bold text-gray-900 font-serif mb-3">{building.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow  font-serif">{building.description}</p>
              <Link to={'/apartment'}>
              <button className=" bg-gradient-to-r from-cyan-700 to-cyan-500 text-white text-lg font-semibold px-6 py-3 rounded-lg w-full transition-all duration-300 hover:shadow-xl hover:scale-105 tracking-wide uppercase">
                See More
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default FeaturedBuildings;