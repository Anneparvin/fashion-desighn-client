import React from 'react';
import { Link } from 'react-router-dom';

const SelectClass = ({selectedClass}) => {
    const {image,name, TotalEnrolledStudents,seats} = selectedClass;


    return (
        <div>
         <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracki">Name : {name}</h2>
			<p className="dark:text-gray-100">TotalEnrolledStudents : {TotalEnrolledStudents}</p>
			<p className="dark:text-gray-100">seats : {seats}</p>
		</div>
		<Link to="/dashboard/mycart">
        <button type="button" className="btn btn-accent btn-wide p-3">Add to Cart</button>
        </Link>
	</div>
</div>   
        </div>
    );
};

export default SelectClass;