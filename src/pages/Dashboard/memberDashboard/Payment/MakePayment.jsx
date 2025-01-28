
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const MakePayment = () => {
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0); 
    const [error, setError] = useState('');
    const [rentPrice, setRentPrice] = useState(1000);
    const axiosSecure = useAxiosSecure()

    const applyCoupon = async () => {
        try {
          const { data } = await axiosSecure.post('/coupon', { couponCode });
          setDiscount(data.discount); // Update the discount percentage
          setError(''); // Clear any previous errors
    
          // Update the rent price based on the discount
          const discountedPrice = rentPrice * (1 - data.discount / 100);
          setRentPrice(discountedPrice);
        } catch (err) {
          setError('Invalid coupon code.'); // Handle invalid coupon
          setDiscount(0); // Reset discount if the coupon is invalid
        }
      };
    

 
  return (

    <div className="mt-12 px-44">

<h2 className="text-center text-4xl font-bold my-10">Make Payment</h2>

 {/* Coupon Code Section */}
 <div className="mb-6">
        <label className="label">
          <span className="label-text">Coupon Code</span>
        </label>
        <div className="flex">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button
            className="btn ml-2"
            onClick={applyCoupon}
          >
            Apply Coupon
          </button>
        </div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        {discount > 0 && <p className="text-green-600 mt-2">Coupon applied! Discount: {discount}%</p>}
      </div>

      <div className="mb-6">
        <p>Total Rent: ${rentPrice.toFixed(2)}</p>
      </div>



    <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
    </Elements>
</div>




    
  );
};

export default MakePayment;
