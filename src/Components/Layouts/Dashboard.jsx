import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {FaUsers,FaHome,FaWallet} from "react-icons/fa";
import {AiFillAmazonCircle} from "react-icons/ai";
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    return (
        <div>
         <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
           <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">


            {/* <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            
                           
                            <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li> */}
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/addclass"> <AiFillAmazonCircle></AiFillAmazonCircle> Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/manageclass"><FaWallet></FaWallet> Manage Class</NavLink></li>
                            <li><NavLink to="/dashboard/instructors"><FaWallet></FaWallet> Instructors</NavLink></li>
                            <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment</NavLink></li>

                            
            
                            <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    {/* <li><NavLink to="/class"> classes</NavLink></li> */}
                    
    </ul>
  
  </div>
</div>   
        </div>
    );
};

export default Dashboard;