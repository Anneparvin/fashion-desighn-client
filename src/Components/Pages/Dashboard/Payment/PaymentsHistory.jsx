import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';

const PaymentsHistory = () => {
    const [payments, setPayments] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/payments')
           .then(res => res.json()) 
           .then(data => setPayments(data))
        
    },[])


    return (
        <div>
           <SectionTitle subHeading="Sorting By date" heading="Payment History" ></SectionTitle> 
             <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>itemNames</th>
        <th>email</th>
        <th>price</th>
        <th>date</th>
        <th>quantity</th>
      </tr>
    </thead>
    <tbody>
     {
        payments.map((payment, index)=> <tr key={payment._id}>
        <th>{index + 1}</th>
        <td>{payment.itemNames}</td>
        <td>{payment.email}</td>
        <td>{payment.price}</td>
        <td>{payment.date}</td>
        <td>{payment.quantity}</td>
        
       
       
      </tr>)
     }
      
    
    </tbody>
    
  </table>
</div>   

        </div>  
       
    );
};

export default PaymentsHistory;