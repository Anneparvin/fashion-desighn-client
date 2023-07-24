import { useContext } from 'react';
import ActiveLink from '../../../../ActiveLink/ActiveLink'
import logo from '../../../../assets/images/logo/seddi.png';
import { AuthContext } from '../../../../Providers/AuthProvider';
import useCart from '../../../../hooks/useCart';
import useAdmin from '../../../../hooks/UseAdmin';
import useInstructor from '../../../../hooks/useInstructor';
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
const {user, logOut} = useContext(AuthContext);
const [cart] = useCart();
 const [isAdmin] = useAdmin();
 const [isInstructor] = useInstructor();


const handleLogOut = () => {
  logOut()
  .then(() => {})
  .catch(error => console.log(error));
}

    const navOptions = <>
    <li><ActiveLink to='/'>Home</ActiveLink></li>

    {
    isAdmin ? <>
     <li><ActiveLink to="/dashboard/adminhome">Dashboard</ActiveLink></li>
     </> : <>
    <li><ActiveLink to="/dashboard/userhome">Dashboard</ActiveLink></li>
    </>
    }
    
    {
      isInstructor ? <> 
      <li><ActiveLink to='dashboard/instructors'>Instructors</ActiveLink></li>
      </> : <>
      <li><ActiveLink to='dashboard/manageclass'>Classes</ActiveLink></li>
     
    
      </>
    }
   
   <li><ActiveLink to="/dashboard/mycart">
                                <FaShoppingCart /> My Cart
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </ActiveLink>
     </li>

     {
      user ? <>
      <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
    </> : <>
      <li><ActiveLink to="/login">Login</ActiveLink></li>
    </>
    }
    </>

    
    return (
       <div className="navbar bg-yellow-400 text-black text-lg font-bold p-8">
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
    <img className='w-24 rounded-lg' src={logo}/>
   
  </div>
        
    <a href='/' className="btn btn-ghost text-4xl font-bold mt-8">TEXTURA</a>
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