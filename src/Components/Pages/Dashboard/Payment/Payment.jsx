import React from 'react';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../../hooks/useCart';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))



    return (
        <div className='w-full'>
         <Helmet>
                <title>Fashion Design | Payment</title>
            </Helmet> 
            <div>
            <SectionTitle heading="Money is All" subHeading="take my money"></SectionTitle>  
            </div>
            <h2 className="text-3xl ml-11 font-bold uppercase+">teka o teka tumi uira uira aso.....</h2>
            
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;