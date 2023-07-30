import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../../../hooks/useAuth'
import useCart from '../../../../hooks/useCart'
import Swal from "sweetalert2";


const SelectClass = ({selectedClass}) => {
    const {image,name, TotalEnrolledStudents,seats, price,_id} = selectedClass;
	const {user} = useAuth();
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();


	const handleAddToCart = _id => {
         console.log(_id);
        if(user && user.email){
            const classItems = {classItemId: _id, name, image, TotalEnrolledStudents, seats, price, email: user.email}
            fetch('https://fashion-design-server-delta.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItems)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }


    return (
        <div>
         <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracki">Name : {name}</h2>
			<p className="dark:text-gray-100">TotalEnrolledStudents : {TotalEnrolledStudents}</p>
			<p className="dark:text-gray-100">Seats : {seats}</p>
			<p className="dark:text-gray-100">Price : {price}</p>
		</div>
		<div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(_id)} className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400 mt-4 btn-wide">Add to Cart</button>
                </div>
	</div>
</div>   
        </div>
    );
};

export default SelectClass;