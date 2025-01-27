import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FancyCoupn = () => {
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/coupon")
          .then((res) => res.json()) // ✅ Ensure response is converted to JSON
          .then((data) => setCoupons(data)) // ✅ Properly update state with fetched data
          .catch((err) => console.error("Error fetching coupons:", err));
      }, []);
    
    return (
        <div className="py-10 px-5 mt-8 ">
        <h2 className="text-3xl  font-bold text-center mb-16">🔥 Exclusive Coupons 🔥</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {coupons.length > 0 ? (
          coupons.map((coupon, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-cyan-700 to-cyan-500 p-6 rounded-3xl  shadow-xl relative transform hover:scale-105 transition-all duration-300"
            >
              {/* Discount Badge */}
              <span className="absolute top-[-15px] right-[-15px] bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-md">
                {coupon.discount}% OFF
              </span>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-purple-700 text-white">{coupon.title}</h3>
              <p className=" mt-2 text-white">{coupon.description}</p>

            
              <div className="mt-4 flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg border border-dashed border-gray-400">
                <span className="text-lg font-mono text-gray-700">{coupon.couponCode}</span>
                <button
                  className="px-3 py-1 bg-cyan-700 text-white rounded-md hover:bg-purple-700 transition"
                >
                  Copy
                </button>
              </div>

             
              <p className="text-sm text-white mt-3">
                Created on: {new Date(coupon.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-white text-center text-xl">No coupons available. 🛍️</p>
        )}
      </div>
      </div>
    );
};

export default FancyCoupn;