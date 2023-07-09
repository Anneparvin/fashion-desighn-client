
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async() => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

const handleMakeAdmin = user => {
  fetch(`http://localhost:5000/users/admin/${user._id}`,{
    method:'PATCH'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.modifiedCount){
      refetch();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${user.name} is an Admin Now!`,
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
}

const handleMakeInstructore = user => {
  fetch(`http://localhost:5000/users/instructor/${user._id}`,{
    method:'PATCH'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.modifiedCount){
      refetch();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${user.name} is an Instructore Now!`,
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
}

const handleDeleteAdmin = user => {
  fetch(`http://localhost:5000/users/admin/${user._id}`,{
    method:'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.deletedCount){
      refetch();
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'user has been deleted.',
            'success'
          )
        }
      })
    }
  })
}

const handleDeleteInstructor = user => {

}
    return (
        <div className='w-full'>
             <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
         <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>AdminRole</th>
        <th>InstructorRole</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user, index)=> <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>

        <td>{user.role === 'admin' ? 'admin': 
        <button onClick={() => handleMakeAdmin(user)} className="btn btn-md btn-ghost bg-orange-600  text-white">Make Admin</button>}</td>

        <td>{user.role === 'instructor' ? 'instructor': 
        <button onClick={() => handleMakeInstructore(user)} className="btn btn-ghost bg-green-600  text-white">Make Instructor</button>}</td>

       <td><button onClick={() => handleDeleteAdmin(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt>Admin</button></td>

       <td><button onClick={() => handleDeleteInstructor(user)} className="btn btn-ghost bg-orange-600  text-white"><FaTrashAlt></FaTrashAlt>Instructor</button></td>
                            
       
       
      </tr>)
     }
      
    
    </tbody>
    
  </table>
</div>   
        </div>
    );
};

export default AllUsers;