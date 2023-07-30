import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import PopInstructor from './PopInstructor';

const PopInstructore = () => {
    const [sortInstructors, setSortInstructors] = useState([]);

    useEffect(() => {
       fetch('https://fashion-design-server-delta.vercel.app/sortinstructor')
       .then(res => res.json())
       .then(data => setSortInstructors(data))
    },[])
    return (
        <div>
           <SectionTitle subHeading="Sorting By class" heading="All Popular Instructor Here" ></SectionTitle> 
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 p-4'>
            
            {
              sortInstructors.map(sortInstructor => <PopInstructor
                key={sortInstructor._id}
                sortInstructor={sortInstructor}
              ></PopInstructor>)  
            }
        </div>  
        </div>
    );
};

export default PopInstructore;