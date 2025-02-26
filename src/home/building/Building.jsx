import { useEffect, useState } from "react";

const Building = () => {
    const [apartments, setApartments] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchApartments = async () => {
          try {
            const response = await fetch('https://12-assignment-server-smoky.vercel.app/apartments');
            
            
            if (!response.ok) {
              throw new Error('Error fetching apartment details');
            }
            
            const data = await response.json();
            setApartments(data.slice(0, 6));
          } catch (error) {
            setError(error.message);
          }
        };
        fetchApartments();
      }, []);


    return (
        <div className="py-16 ">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-extrabold text-cyan-700 mb-14 tracking-wide uppercase drop-shadow-md">
            About the Building
          </h2>
      
          {error && <p className="text-red-600 text-center text-lg font-medium italic">{error}</p>}
      
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {apartments.map((apartment) => (
              <div 
                key={apartment._id} 
                className="bg-white p-7 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <img 
                  src={apartment.image} 
                  alt="" 
                  className="w-full h-56 object-cover rounded-xl mb-6 shadow-sm"
                />
      
                <div className="space-y-3 text-gray-700 font-serif">
                  <p className="text-2xl font-bold text-gray-900">
                    Floor: <span className="text-lg text-gray-500 font-medium">{apartment.floor_no}</span>
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    Block: <span className="text-lg text-gray-500 font-medium">{apartment.block_name}</span>
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    Apartment No: <span className="text-lg text-gray-500 font-medium">{apartment.apartment_no}</span>
                  </p>
                  <p className="text-2xl font-bold text-cyan-700">
                    Rent: <span className="text-lg text-gray-500 font-medium">{apartment.rent}</span> Tk
                  </p>
                </div>
      
                <button
                 
                  className="mt-6 bg-gradient-to-r from-cyan-700 to-cyan-500 text-white text-lg font-semibold px-6 py-3 rounded-lg w-full transition-all duration-300 hover:shadow-xl hover:scale-105 tracking-wide uppercase"
                >
                  Agreement
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      

    );
};

export default Building;