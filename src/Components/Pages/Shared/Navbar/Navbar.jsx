import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/logo/seddi.png'


const Navbar = () => {
    const navOptions = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='dashboard/instructors'>Instructors</NavLink></li>
    <li><NavLink to='dashboard/manageclass'>Classes</NavLink></li>
    <li><NavLink to='/login'>L0gin</NavLink></li>
    <li><NavLink to='/signup'>Sign Up</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li> 
    </>
    return (
       <div className="navbar bg-black text-white p-8">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <div className='flex'>
    <div>
    <img className='w-24' src={logo}/>
   
  </div>
        
    <a href='/' className="btn btn-ghost text-4xl font-semibold">TEXTURA</a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
 
</div>
    );
};

export default Navbar;