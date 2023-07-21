import React from 'react';
import SectionTitle from '../../../SectionTitle/SectionTitle'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = data => {
        console.log(data);

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                
                console.log(imgURL);
                const {name,seats,TotalEnrolledStudents,InstructoreName,instructoreImage,InstructoreEmail, price, feedback} = data;
                const newClass = {name,status:"pending", price: parseFloat(price),seats:parseFloat(seats),TotalEnrolledStudents:parseFloat(TotalEnrolledStudents),InstructoreName,InstructoreEmail,image:imgURL, instructoreImage, feedback}
                console.log(newClass)

       
                axiosSecure.post('/classes', newClass)
                .then(data => {
                    console.log('after posting new class', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
             console.log(imgResponse)
        }
        )

    };
    // console.log(img_hosting_token);
    return (
        <div className="w-full px-10">
            <div>
            <Helmet>
                <title>Fashion Design | AddClass</title>
            </Helmet>
            </div>
            <SectionTitle subHeading="What's new" heading="Add a Class" ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                {/* <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">status*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("status", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Denied
                            </option>
                           
                        </select>
                    </div>
                    </div> */}
                    <div className="flex my-4">
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Seats*</span>
                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Seats" className="input input-bordered w-full " />
                    </div>
                    </div>
                    
                    <div className="flex my-4">
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Total Enrolled Students*</span>
                        </label>
                        <input type="number" {...register("TotalEnrolledStudents", { required: true })} placeholder="Total Enrolled Students" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructore Name*</span>
                        </label>
                        <input type="text" {...register("InstructoreName", { required: true })} placeholder="Instructore Name" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructore Email*</span>
                        </label>
                        <input type="text" {...register("InstructoreEmail", { required: true })} placeholder="Instructore Email" className="input input-bordered w-full " />
                    </div>
                    
                    </div>
                    
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Feedback & Update</span>
                    </label>
                    <textarea {...register("feedback", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    {/* <button disabled={!class.status === "denied"}>Login</button> */}
                    
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Instructore Image*</span>
                    </label>
                    <input type="text" {...register("instructoreImage", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-wide mt-4 bg-slate-500" type="submit" value="Add a class" />
            </form>
        </div>
    );
};

export default AddClass;


