import logo from '../../assets/images/logo dark.png'
import bg from '../../assets/images/Group (1).png'
import { MdArrowOutward } from 'react-icons/md';
const Navbar = () => {
const navItem = <>
<li className='text-xl font-inter '><a>Home</a></li>
<li className='text-xl font-inter '><a>Services</a></li>
<li className='text-xl font-inter '><a>Blog</a></li>
<li className='text-xl font-inter '><a>About Us</a></li>
</>
    return (
        <div style={{ backgroundImage: `url(${bg})`,backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', }}>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
       {navItem}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className=' w-14 lg:w-32' src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
    <button className="lg:text-xl  text-[#343268] font-inter font-semibold border border-[#343268] px-3 lg:px-6 py-1 lg:py-3 rounded-xl flex items-center">Appointment <MdArrowOutward /> </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;