import React, { useEffect } from 'react';
import { useState } from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import SelectClass from './SelectClass';

const SelectedClass = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/selectedclasses')
        .then(res => res.json())
        .then(data => setSelectedClasses(data))
    },[])

    return (
        <div>
        <SectionTitle subHeading="Choose by Students" heading="Selected Class" ></SectionTitle>
       
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 p-4'>
        
        {
          selectedClasses.map(selectedClass => <SelectClass
            key={selectedClass._id}
            selectedClass={selectedClass}
          ></SelectClass>)  
        }
    </div>
    
    </div>
);
};

export default SelectedClass;