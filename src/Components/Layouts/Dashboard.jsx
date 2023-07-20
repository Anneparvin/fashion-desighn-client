import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {FaUsers,FaHome,FaWallet, FaShoppingCart} from "react-icons/fa";
import {AiFillAmazonCircle} from "react-icons/ai";
import {GrMoney} from "react-icons/gr";
import {SiInstructure} from "react-icons/si";
import { Helmet } from 'react-helmet';
import useCart from '../../hooks/useCart';


const Dashboard = () => {
    const [cart] = useCart();
    // const [isAdmin] = useAdmin();
    return (
        <div>
            <Helmet>
                <title>Fashion Design | Dashboard</title>
            </Helmet>
         <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
           <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">


          
                            
                           
                            {/* <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>  */}
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/addclass"> <AiFillAmazonCircle></AiFillAmazonCircle> Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/manageclass"><FaWallet></FaWallet> Manage Class</NavLink></li>
                            <li><NavLink to="/dashboard/instructors"><SiInstructure /> Instructors</NavLink></li>
                            <li><NavLink to="/dashboard/payment"><GrMoney/> Payment</NavLink></li>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart">
                                <FaShoppingCart /> My Cart
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                            
            
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