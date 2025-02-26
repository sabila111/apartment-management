import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";



const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme);
    };
    

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
       <div className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-cyan-700 to-cyan-500 text-black dark:text-white bg-opacity-10 backdrop-blur-md">
         <div className="navbar max-w-7xl mx-auto  py-4  text-black  relative z-[20]">
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
                        className=" dropdown-content bg-cyan-600 mt-3 z-[50] p-2 shadow  rounded-box w-52">
                        {links}

                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-14 h-14" src="https://i.ibb.co.com/2ZnYjVW/602232.png" alt="" />
                    <a className=" text-2xl font-bold">BuildEase</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="  active mx-5  flex justify-center items-center gap-6 px-1 menu-horizontal font-medium text-lg ">

                    {links}


                </ul>
            </div>


            <div className="navbar-end gap-2 relative z-[50]">
                {user ? (
                    <div className="flex items-center gap-1 md:gap-4 lg:gap-4">
                        {user.photoURL && (
                            <div className="relative">
                                <img
                                    src={user.photoURL}
                                    alt="Profile"
                                    className="w-12 h-12 rounded-full cursor-pointer"
                                    onClick={toggleDropdown}
                                />

                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg p-3 z-[100]">
                                        <span className="block text-center text-sm font-medium text-gray-700">{user.displayName}</span>
                                        <Link to="/dashboard" className="block text-center px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
                                        <button
                                            onClick={handleSignOut}
                                            className="w-full px-4 py-2 mt-2 bg-gradient-to-r from-cyan-700 to-cyan-500 text-white rounded hover:bg-gradient-to-r from-cyan-700 to-cyan-500"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <Link to="/login">
                            <button className="py-2 px-2 text-white text-xl font-medium rounded-full bg-gradient-to-r from-cyan-700 to-cyan-500 ">
                                <FaRegUserCircle />
                            </button>
                        </Link>
                    </div>
                )}

                <button
                    onClick={toggleTheme}
                    className="px-2 py-2 rounded-3xl bg-black text-white dark:bg-gray-700 dark:text-gray-300"
                >

                    {isDarkMode ? <CiLight className="text-2xl" /> : <MdOutlineDarkMode className="text-2xl" />}
                </button>

            </div>
        </div>
       </div>
    );
};

export default Navbar;