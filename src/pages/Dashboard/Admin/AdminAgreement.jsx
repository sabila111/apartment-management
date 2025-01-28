import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const AdminAgreement = () => {
    const initialAgreements = useLoaderData();
    const [agreements, setAgreements] = useState(initialAgreements);
   
    const handleAction = (id, action) => {
        fetch(`http://localhost:5000/apartment/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: "checked", role: action === "accept" ? "member" : "user" })
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount !== undefined) {
                Swal.fire({
                    title: 'Success',
                    text: `Agreement ${action === "accept" ? "Accepted" : "Rejected"} successfully!`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });


                const remainingAgreement = agreements.filter(user => user._id.toString() !== id.toString());
                console.log(remainingAgreement);
                setAgreements([...remainingAgreement]);
                console.log(remainingAgreement);

            }
        });
    };


    return (
        <div className='mt-14'>
            <h2 className='text-4xl text-center text-cyan-800 font-bold pb-20'>All Agreement Requests </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Floor</th>
                            <th>Block</th>
                            <th>Room</th>
                            <th>Rent</th>
                            <th>Date</th>
                            <th className='text-center'>button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            agreements.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.userName}</td>
                                <td>{user.userEmail}</td>
                                <td>{user.floor}</td>
                                <td>{user.block}</td>
                                <td>{user.apartment_no}</td>
                                <td>{user.rent}</td>
                                <td>{user.agreementDate}</td>
                                <td className='font-semibold text-lg'>

                                    <div className="flex flex-col  items-center gap-3">

                <button  onClick={() => handleAction(user._id, "accept")}  className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white text-base px-3 py-3 rounded-lg ">Accept</button>

            
            <button onClick={() => handleAction(user._id, "reject")}  className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white text-base px-4 py-3 rounded-lg ">Reject</button>
         
              
              

                </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AdminAgreement;