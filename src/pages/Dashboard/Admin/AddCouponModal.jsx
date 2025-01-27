import React, { useState } from "react";
import Swal from "sweetalert2";

const AddCouponModal = ({ isOpen, onClose, onCouponAdded }) => {
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCoupon = {
            couponCode,
            discount: parseInt(discount),
            description,
            createdAt: new Date().toISOString().split("T")[0],
        };

        fetch("http://localhost:5000/coupon", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoupon),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Added Coupons",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    onCouponAdded(newCoupon);
                    onClose();
                }
            });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Add Coupon</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    <input
                        type="number"
                        placeholder="Discount %"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    <textarea
                        placeholder="Coupon Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-600 text-white rounded-lg"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-cyan-700 text-white rounded-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCouponModal;
