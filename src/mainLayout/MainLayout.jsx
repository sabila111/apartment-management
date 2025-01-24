import { Outlet } from "react-router-dom";
import Home from "../home/Home";
import Navbar from "../home/navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;