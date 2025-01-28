import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddCouponModal from './AddCouponModal';
import Swal from 'sweetalert2';

const AdminCoupon = () => {
  const initialCoupons = useLoaderData();
  const [coupons, setCoupons] = useState(initialCoupons);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCouponAdded = (newCoupon) => {
    setCoupons((prevCoupons) => {
      const exists = prevCoupons.some((coupon) => coupon._id === newCoupon._id);
      if (!exists) {
        return [...prevCoupons, newCoupon];
      }
      return prevCoupons;
    });
  };

  const handleAvailabilityToggle = (couponId, currentAvailability) => {
    
    const newAvailability = !currentAvailability;
  
   
    setCoupons(prevCoupons =>
      prevCoupons.map(coupon =>
        coupon._id === couponId
          ? { ...coupon, isAvailable: newAvailability }
          : coupon
      )
    );
  
    
    fetch(`https://12-assignment-server-smoky.vercel.app/coupon/${couponId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isAvailable: newAvailability }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('Coupon availability updated:', result);
        Swal.fire({
          title: 'Success!',
          text: 'Coupon availability has been updated.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      })
      .catch(err => {
        console.error('Failed to update coupon availability:', err);
        
        setCoupons(prevCoupons =>
          prevCoupons.map(coupon =>
            coupon._id === couponId
              ? { ...coupon, isAvailable: currentAvailability }
              : coupon
          )
        );
      });
  };
  
  
  

  return (
    <div className="mt-14">
      <h2 className="text-4xl text-center text-cyan-800 font-bold pb-20">All Coupons</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Coupon Code</th>
              <th>Discount</th>
              <th>Description</th>
              <th>Date</th>
              <th>Availability</th> 
              <th>Action</th> 
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon, index) => (
              <tr key={coupon._id}>
                <th>{index + 1}</th>
                <td>{coupon.couponCode}</td>
                <td>{coupon.discount}</td>
                <td>{coupon.description}</td>
                <td>{coupon.createdAt}</td>
                <td>{coupon.isAvailable ? 'Available' : 'Unavailable'}</td>
                <td>
                <button
  onClick={() => handleAvailabilityToggle(coupon._id, coupon.isAvailable)}
  className={`btn ${coupon.isAvailable ? 'px-4 py-3 rounded-lg bg-white border-4 border-cyan-800 text-cyan-600 font-bold' : 'px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-700 to-cyan-500 text-white font-bold'}`}
>
  {coupon.isAvailable ? 'Mark Unavailable' : 'Mark Available'}
</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-60 mx-auto mt-20 mb-10">
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-700 to-cyan-500 text-white font-bold">
            Add Coupons
          </button>
        </div>

        <AddCouponModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCouponAdded={handleCouponAdded}></AddCouponModal>
      </div>
    </div>
  );
};

export default AdminCoupon;
