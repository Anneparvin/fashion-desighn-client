import React from 'react';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../SectionTitle/SectionTitle';

const Payment = () => {
    return (
        <div className='w-full'>
         <Helmet>
                <title>Fashion Design | Payment</title>
            </Helmet> 
            <div>
            <SectionTitle heading="Money is All" subHeading="take my money"></SectionTitle>  
            </div>
            
        </div>
    );
};

export default Payment;