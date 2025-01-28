import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Payment = () => {

     const { user } = useContext(AuthContext);
        const [agreements, setAgreements] = useState([]);
        const [selectedMonth, setSelectedMonth] = useState("");
        const navigate = useNavigate();

     useEffect(() => {
            if (user) {
                fetch(`https://12-assignment-server-smoky.vercel.app/members/${user.email}`)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("Received data:", data);
                        
                        if (data && typeof data === "object") {
                            setAgreements(data); // Store data directly as an object
                          } else {
                            setAgreements(null); // Handle empty response
                          }
                    })
                    .catch((error) => console.error("Fetch error:", error));
            }
        }, [user]);


        const handleSubmit = (event) => {
            event.preventDefault();
        
            if (!selectedMonth) {
                toast.error('Please select month')
              return;
            }
       
            navigate("/dashboard/payment", {
              state: {
                email: user.email,
                floor: agreements.floor,
                block: agreements.block,
                apartment_no: agreements.apartment_no,
                rent: agreements.rent,
                month: selectedMonth,
              },
            });
          };

    return (
        <div className="  p-24">
            <h2 className="text-3xl font-extrabold mb-4 text-center">Make payment</h2>
            <form onSubmit={handleSubmit}>
                {/* form row 1 */}
                {user ?
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input readOnly value={user.displayName} type="text"  placeholder="name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                            <label className="label">
                                <span className="label-text"> Email</span>
                            </label>
                            <label className="input-group">
                                <input readOnly value={user.email} type="email"  placeholder="email" className="input input-bordered w-full" />
                            </label>
                        </div>


                    </div>

                    : <p></p>}


                {/* form row 2 */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Floor</span>
                        </label>
                        <label className="input-group">
                            <input type="text" readOnly value={agreements.floor} name="post" placeholder="Floor" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Month</span>
                        </label>
                        <label className="input-group">
                            <input list="dropdown-options" id="options" name="category" 
                           value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}
                             placeholder="Month" className="input input-bordered w-full" />
                            <datalist id="dropdown-options">
                            <option value="January" />
                                <option value="February" />
                                <option value="March" />
                                <option value="April" />
                                <option value="May" />
                                <option value="June" />
                            </datalist>

                        </label>
                    </div>

                </div>
                {/* form row 3 */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Block Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" readOnly value={agreements.block} name="location" placeholder="block name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Apartment No.</span>
                        </label>
                        <label className="input-group">
                            <input type="text" readOnly value={agreements.apartment_no} name="description" placeholder="Apartment No." className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>

      
                <div className="md:flex mb-6">

                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text">Rent </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="thumbnail " readOnly value={agreements.rent}  placeholder="rent " className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>

              
                <input type="submit" value="Pay" className="btn btn-block bg-gradient-to-r from-cyan-700 to-cyan-500 text-white mt-6 " />
                
            </form>


            <ToastContainer />
        </div>
    );
};

export default Payment;