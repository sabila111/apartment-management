import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const Navbar = () => {

    
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/apartment' >Apartment</NavLink></li>

    </>
    

    return (
        <div className="navbar bg-white ">
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
                        className=" dropdown-content bg-indigo-600 mt-3 z-[50] p-2 shadow  rounded-box w-52">
                        {links}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-semibold"><span className="text-4xl font-bold text-indigo-600 -mr-2 mb-3">Kind</span>Hive</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="  active mx-5  flex justify-center items-center gap-6 px-1 menu-horizontal font-medium text-lg ">

                    {links}
                   

                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ?
                        <div className="relative group flex items-center gap-1 md:gap-4 lg:gap-4 ">
                            {user.photoURL && (
                                <>

                                    <img
                                        src={user.photoURL}
                                        alt=""
                                        className="w-12 h-12 rounded-full cursor-pointer"
                                    />
                                    
                                    
                                        <div className="absolute top-16 left-0 hidden w-40 bg-white shadow-md p-3 rounded-lg text-center group-hover:flex flex-col gap-2">
                                        <span className="text-sm font-medium text-gray-700">{user.displayName}</span>
                                        <button
                                            onClick={handleSignOut}
                                            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-500"
                                        >
                                            Logout
                                        </button>
                                    </div>

                                    
                                </>
                            )}

                        </div>


                        :
                        <div className='flex items-center gap-4'>
                            <Link to={'/login'}>
                                <button className="py-3 px-5 text-white font-medium rounded-lg bg-gradient-to-r from-indigo-700 to-cyan-400  ">Login</button>
                            </Link>
                            <Link to={'/register'}>
                                <button className="py-3 px-5 text-white font-medium rounded-lg bg-gradient-to-r from-indigo-700 to-cyan-400">Register</button>
                            </Link>
                        </div>


                }

            </div>
        </div>
    );
};

export default Navbar;