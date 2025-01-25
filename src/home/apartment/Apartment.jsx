import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Apartment = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
  const [apartments, setApartments] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apartmentsPerPage = 6;
  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");
  const totalPages = Math.ceil(filteredApartments.length / apartmentsPerPage);
const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    fetch("/fake.json") 
      .then((res) => res.json())
      .then((data) => {
        setApartments(data);
        setFilteredApartments(data);
      });
  }, []);

  const handleFilter = () => {
    const min = parseInt(minRent) || 0;
    const max = parseInt(maxRent) || 5000;
    const filtered = apartments.filter(
      (apt) => apt.rent >= min && apt.rent <= max
    );
    setFilteredApartments(filtered);
    setCurrentPage(1);
  };

  const handleAgreement = (apartment) => {
    if (!user) {
      return navigate(location?.state ? location.state : '/')
    }

    const agreementData = {
      userName: user.displayName,
      userEmail: user.email,
      floor: apartment.floor_no,
      block: apartment.block_name,
      apartment_no: apartment.apartment_no,
      rent: apartment.rent,
      status: "pending"
    };

    // fetch("https://your-api.com/agreements", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(agreementData)
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //   alert("Agreement submitted successfully!");
    // });


  };

  const indexOfLastApartment = currentPage * apartmentsPerPage;
  const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
  const currentApartments = filteredApartments.slice(indexOfFirstApartment, indexOfLastApartment);

    return (
        <div className='mt-9'>

             <h1 className="text-4xl font-bold text-center mt-4 mb-12">Available Apartments</h1>

{/* search */}

             <div className="flex items-center justify-center gap-2 mb-10">
        <input 
          type="number" 
          placeholder="Min Rent" 
          value={minRent} 
          onChange={(e) => setMinRent(e.target.value)} 
          className="border p-2 rounded"
        />
        <input 
          type="number" 
          placeholder="Max Rent" 
          value={maxRent} 
          onChange={(e) => setMaxRent(e.target.value)} 
          className="border p-2 rounded"
        />
        <button onClick={handleFilter} className="bg-cyan-700 text-white px-4 py-2 rounded">Search</button>
      </div>

{/* card */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentApartments.map((apartment) => (
          <div key={apartment.id} className="border p-4 rounded-lg shadow-md">
            <img src={apartment.image} alt="Apartment" className="w-full h-40 object-cover rounded-lg mb-2" />
            <p><strong>Floor:</strong> {apartment.floor_no}</p>
            <p><strong>Block:</strong> {apartment.block_name}</p>
            <p><strong>Apartment No:</strong> {apartment.apartment_no}</p>
            <p><strong>Rent:</strong> {apartment.rent} Tk</p>
            <button 
             onClick={() => handleAgreement(apartment)}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded w-full"
            >
              Agreement
            </button>
          </div>
        ))}
      </div>



{/* pagination */}

<div className="mt-4 flex justify-center gap-2">
  {pageNumbers.map((num) => (
    <button
      key={num}
      onClick={() => setCurrentPage(num + 1)}
      className={`px-3 py-1 ${currentPage === num + 1 ? "bg-green-700 text-white" : "bg-gray-200"}`}
    >
      {num + 1}
    </button>
  ))}
</div>

        </div>
    );
};

export default Apartment;