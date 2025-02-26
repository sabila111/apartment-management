import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
    fetch("https://12-assignment-server-smoky.vercel.app/apartments") 
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
      status: "pending",
      agreementDate: new Date().toISOString().split("T")[0],
      role: 'user'
    };

    fetch('https://12-assignment-server-smoky.vercel.app/apartment', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },

        body: JSON.stringify(agreementData)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'Agreement made successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset()
            }

        })
        .catch(error => {
            console.error("catch error:", error);
        });


  };

  const indexOfLastApartment = currentPage * apartmentsPerPage;
  const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
  const currentApartments = filteredApartments.slice(indexOfFirstApartment, indexOfLastApartment);

    return (
        <div className='mt-28 dark:bg-gray-900  dark:text-white'>

             <h1 className="text-4xl font-bold text-center mt-4 mb-12 ">Available Apartments</h1>

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
        <button onClick={handleFilter} className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white px-4 py-2 rounded">Search</button>
      </div>

{/* card */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentApartments.map((apartment) => (
          <div key={apartment._id} className="border p-4 rounded-lg shadow-md">
            <img src={apartment.image} alt="" className="w-full h-48 object-cover rounded-lg mb-2" />
            <p className='font-bold text-lg mb-1'>Floor: <span className='text-md text-gray-500 font-medium'> {apartment.floor_no}</span></p>

            <p className='font-bold text-lg mb-1'>Block: <span className='text-md text-gray-500 font-medium'>{apartment.block_name}</span></p>

            <p className='font-bold text-lg mb-1'>Apartment No: <span className='text-md text-gray-500 font-medium'>{apartment.apartment_no}</span> </p>
            
            <p className='font-bold text-lg mb-1'>Rent: <span className='text-md text-gray-500 font-medium'>{apartment.rent}</span> Tk</p>
            <button 
             onClick={() => handleAgreement(apartment)}
              className="mt-2 bg-gradient-to-r from-cyan-700 to-cyan-500 text-white px-4 py-2 rounded w-full"
            >
              Agreement
            </button>
          </div>
        ))}
      </div>



{/* pagination */}

<div className="mt-16 mb-8 flex justify-center gap-2">
  {pageNumbers.map((num) => (
    <button
      key={num}
      onClick={() => setCurrentPage(num + 1)}
      className={`px-3 py-1 rounded-full ${currentPage === num + 1 ? "bg-gradient-to-r from-cyan-700 to-cyan-500 text-white" : "bg-gray-200"}`}
    >
      {num + 1}
    </button>
  ))}
</div>


        </div>
    );
};

export default Apartment;