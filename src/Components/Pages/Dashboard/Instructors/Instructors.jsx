import { Helmet } from "react-helmet";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";


const Instructors = () => {
    // const {user} = useAuth();
    // console.log(user?.displayName);
    // const instructors = user?.filter(item => item.role === "instructor")
   
 const [instructor, setinstructor] = useState([]);

 useEffect(() => {
    fetch('http://localhost:5000/instructor')
    .then(res => res.json())
    .then(data => setinstructor(data))
 },[])

    return (
        <div className="w-full">
            <div>
            <Helmet>
                <title>Fashion Design | Instructors</title>
            </Helmet>
            </div>
            <SectionTitle heading="Manage All Instructors" subHeading="Catch up"></SectionTitle>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>InstructorsName</th>
                            <th>InstructorsEmail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           instructor?.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
                                <div>
                                            <div className="font-bold uppercase mt-3">{item.name}</div>
                                        </div>
                                <td>
                                    {item.email}
                                </td>
                                
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

  

export default Instructors;