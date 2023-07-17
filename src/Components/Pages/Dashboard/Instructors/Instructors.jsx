import UseClass from "../../../../hooks/UseClass";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../SectionTitle/SectionTitle";


const Instructors = () => {
    const [classes, , refetch] = UseClass();
    const [axiosSecure] = useAxiosSecure();


    return (
        <div className="w-full">
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
                            {/* <th>Update</th>
                            <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
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
                                
                                {/* <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td> */}
                                {/* <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td> */}
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

  

export default Instructors;