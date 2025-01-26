import { Outlet, useLocation } from "react-router-dom";
import Home from "../home/Home";
import Navbar from "../home/navbar/Navbar";
import Footer from "../home/Footer";



const MainLayout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            <div className="max-w-7xl mx-auto">
           {noHeaderFooter ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;