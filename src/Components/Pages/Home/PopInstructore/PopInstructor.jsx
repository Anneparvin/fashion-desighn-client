import React from 'react';

const PopInstructor = ({sortInstructor}) => {
    const {name, email, photoURL,role} = sortInstructor;
    return (
        <div>
           <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src={photoURL} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<h2 className="text-xl font-semibold tracki">InstructoreName : {name}</h2>
		<span className="block text-md font-medium tracki uppercase dark:text-violet-400">Email : {email}</span>
	</div>
	<p className="dark:text-gray-100">Role : {role}</p>
</div> 
        </div>
    );
};

export default PopInstructor;