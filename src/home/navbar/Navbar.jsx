import { Link, NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { TbBrand4Chan } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";

const Navbar = () => {

  

    const handleSignOut = () => {
        LogOut()
            .then()
            .catch()
    }

    const links = <>

        <li > <NavLink className='flex justify-between gap-1 ' to={'/'}><span className="mt-1 text-xl"><CiHome /> </span> Home</NavLink></li>

        <li><NavLink className='flex justify-between gap-1 ' to={'/brands'}><span className="mt-1 text-xl"><TbBrand4Chan /></span> Brands</NavLink></li>

        <li><NavLink className='flex justify-between gap-1 ' to={'/profile'}><span className="mt-1 text-xl"><CgProfile /></span> My-Profile</NavLink></li>

        <li><NavLink className='flex justify-between gap-1 ' to={'/aboutDev'}><span className="mt-1 text-xl"><FaChalkboardTeacher /></span> About Dev</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-sky-700 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className=" flex justify-center items-center normal-case font-bold text-lg md:text-3xl lg:text-3xl"> 
                    <img className="h-20 w-20" src={'https://i.ibb.co.com/RCPtdcP/5629119.png'} alt="" />
                    
                    Coupon<span className="text-2xl md:text-4xl lg:text-4xl text-sky-700">Catcher</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" active mx-5  flex justify-center items-center gap-6 px-1 menu-horizontal font-medium text-lg ">
                    <style>
                        {`
  .menu-horizontal li:hover {
    background-color:  rgb(3 105 161);
    padding:10px;
    border-radius:5px;
    color: white;
    
  }
`}
                    </style>

                    {links}
                </ul>
            </div>
            {/* <div className="navbar-end">

                {
                    user ?
                        <div className="flex items-center gap-1 md:gap-4 lg:gap-4">
                            {user.photoURL
                                && (
                                    <img src={user.photoURL
                                    } alt="" className="w-10 h-10 rounded-full" />
                                )}

                            {user.email && (
                                <span className="hidden sm:inline">{user.email}</span>
                            )}
                            <button onClick={handleSignOut} className="py-3 px-5 text-white font-medium rounded-lg bg-sky-700 ">Sign Out</button>
                        </div>
                        :
                        <div className='flex items-center gap-4'>
                            <Link to={'/login'}>
                                <button className="py-3 px-5 text-white font-medium rounded-lg bg-sky-700 ">Login</button>
                            </Link>
                            <Link to={'/register'}>
                                <button className="py-3 px-5 text-white font-medium rounded-lg bg-sky-700 ">Register</button>
                            </Link>
                        </div>
                }


            </div> */}
        </div>
    );
};

export default Navbar;