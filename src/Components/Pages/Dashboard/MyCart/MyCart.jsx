import React from 'react';
import { Helmet } from 'react-helmet';

const MyCart = () => {
    return (
        <div className="w-full">
          <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet> 
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link>
            </div>  
        </div>
    );
};

export default MyCart;