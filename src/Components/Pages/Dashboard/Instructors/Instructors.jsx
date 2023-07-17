import { Helmet } from "react-helmet";
import useAuth from "../../../../hooks/UseAuth";
import SectionTitle from "../../../SectionTitle/SectionTitle";


const Instructors = () => {
    const {user} = useAuth();
    console.log(user);
    const instructors = user.filter(item => item.role === "instructor")
   


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
                            instructors.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
                                <div>
                                            <div className="font-bold">{item.InstructoreName}</div>
                                        </div>
                                <td>
                                    {item.InstructoreEmail}
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