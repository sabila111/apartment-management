import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddCouponModal from './AddCouponModal';

const AdminCoupon = () => {
    const initialAgreements = useLoaderData();
    const [agreements, setAgreements] = useState(initialAgreements);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleCouponAdded = (newCoupon) => {
        setAgreements((prevAgreements) => {
            
            const exists = prevAgreements.some(coupon => coupon._id === newCoupon._id);
            if (!exists) {
                return [...prevAgreements, newCoupon];
            }
            return prevAgreements; 
        });
    };

    return (
        <div className='mt-14'>
            <h2 className='text-4xl text-center text-cyan-800 font-bold pb-20'>All Coupons </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Coupon Code</th>
                            <th>Discount</th>
                            <th>Description</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            agreements.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.couponCode}</td>
                                <td>{user.discount}</td>
                                <td>{user.description}</td>
                                <td>{user.createdAt}</td>

                            </tr>)
                        }

                    </tbody>
                </table>


                <div className='w-60 mx-auto mt-20'>
                    <button onClick={() => setIsModalOpen(true)} className='px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-700 to-cyan-500 text-white font-bold'>Add Coupons</button>

                </div>

                <AddCouponModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onCouponAdded={handleCouponAdded}
                ></AddCouponModal>

            </div>
        </div>
    );
};

export default AdminCoupon;