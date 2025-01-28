import React, {  useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../../provider/AuthProvider';

const CheckoutForm = ({ rentPrice }) => {
    const {user} = useContext(AuthContext)
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [paymentIntent, setPaymentIntent] = useState(null);
    const [clientSecret, setClientSecret] = useState('')
 
    useEffect(() => {
        if (rentPrice) {
          const createPaymentIntent = async () => {
            console.log('Creating payment intent for rentPrice:', rentPrice);
            try {
              const response = await fetch('/create-payment-intent', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rent: rentPrice }), 
              });
    
              if (!response.ok) {
                throw new Error('Failed to create payment intent');
              }
    
              const data = await response.json();
              console.log('Received clientSecret from backend:', data.clientSecret);
              setClientSecret(data.clientSecret);  
            } catch (error) {
              console.error('Error creating payment intent:', error);
              setError('Failed to create payment intent');
            }
          };
    
          createPaymentIntent();
        }
      }, [rentPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements || !clientSecret) {
            console.log('Stripe or clientSecret not ready');
            return; 
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else{
            console.log('pYMENT intent',paymentIntent);
        }

    
    }


    useEffect(() => {
        console.log('Stripe Loaded:', stripe);
        console.log('clientSecret:', clientSecret);
    
        if (!clientSecret) {
            console.error('Client Secret is missing!');
        }
    }, [stripe, clientSecret]);
    return (
        <div>
            <form onSubmit={handleSubmit}>

            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='bg-gradient-to-r from-cyan-700 to-cyan-500 text-white text-base px-5 py-2 rounded-lg mt-9' type="submit" disabled={!stripe || !clientSecret}>
            Pay 
        </button>
            {/* <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>} */}
            </form>
        </div>
    );
};

export default CheckoutForm;