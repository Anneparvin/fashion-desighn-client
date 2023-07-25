import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import Popular from './Popular';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

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
                key={sortClass._id}
                sortClass={sortClass}
              ></Popular>)  
            }
        </div>
        <Link to="/dashboard/manageclass">
        <button className="btn btn-outline border-0 border-b-4 mt-4">View All Class</button></Link>
        </div>
    );
};

export default PopularClass;