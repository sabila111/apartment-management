import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../home/navbar/Navbar";
import Footer from "../home/Footer";
import { useEffect } from "react";



const MainLayout = () => {

    useEffect(() => {
        document.documentElement.classList.add("dark"); // Force dark mode for testing
    }, []);

    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div className="dark:bg-gray-900 text-black dark:text-white">
            <div>
           {noHeaderFooter ||  <Navbar></Navbar>}
            </div>
            <div  className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;