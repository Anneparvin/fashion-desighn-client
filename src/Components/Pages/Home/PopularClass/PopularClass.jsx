import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import Popular from './Popular';
import SectionTitle from '../../../SectionTitle/SectionTitle';

const PopularClass = () => {
    const [sortClasses, setSortClasses] = useState([]);

 useEffect(() => {
    fetch('http://localhost:5000/sortclasses')
    .then(res => res.json())
    .then(data => setSortClasses(data))
 },[])

    return (
        <div>
            <SectionTitle subHeading="Sorting By Students" heading="All Popular Class Here" ></SectionTitle>
           
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 p-4'>
            
            {
              sortClasses.map(sortClass => <Popular
                key={sortClass.id}
                sortClass={sortClass}
              ></Popular>)  
            }
        </div>
        </div>
    );
};

export default PopularClass;