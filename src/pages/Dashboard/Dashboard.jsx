import React from 'react';
import { AiFillPayCircle, AiOutlinePayCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaHome, FaIdeal } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { RiCoupon2Fill } from 'react-icons/ri';
import { TfiAnnouncement } from 'react-icons/tfi';
import {  NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';



const Dashboard = () => {
    const [isAdmin] = useAdmin() 
    // const isMember = useMember()
    return (
        <div className="flex gap-7">
            <div className="w-64 min-h-screen bg-gradient-to-r from-cyan-700 to-cyan-500">

                
                {/* user */}
                <ul className="menu p-5">
                    {
                        isAdmin? 
                        <>
 {/* admin */}
             
 <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/adminProfile'}><CgProfile /> My Profile</NavLink>
                        </li>

                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/manageMember'}><IoPeople /> Manage Members</NavLink>
                        </li>
                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/makeAnnouncement'}><TfiAnnouncement />Make Announcement</NavLink>
                        </li>
                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/agreementRequests'}><FaIdeal />Agreement Requests
                        </NavLink>
                        </li>
                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/manageCoupons'}><RiCoupon2Fill />Manage Coupons

                        </NavLink>
                        </li>

                    <div className=" border-2 bg-white"></div>
                    <li className="text-white font-bold text-lg mt-3">
                        <NavLink to={'/'}>
                            <FaHome></FaHome>
                            Home
                        </NavLink>

                    </li>
                        </> : 

                    
                        <>
                        <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/memberProfile'}><CgProfile /> Member Profile</NavLink>
                        </li>

                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/makePayment'}><AiFillPayCircle /> Make payment</NavLink>
                        </li>

                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/paymentHistory'}><AiOutlinePayCircle />Payment History</NavLink>
                        </li>

                        <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/memberAnnouncement'}><TfiAnnouncement />Member Announcement</NavLink>
                        </li>

                    
                        <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/userProfile'}><CgProfile /> My user Profile</NavLink>
                        </li>

                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/announcement'}><TfiAnnouncement />User Announcement</NavLink>
                        </li>

                    <div className=" border-2 bg-white"></div>
                    <li className="text-white font-bold text-lg mt-3">
                        <NavLink to={'/'}>
                            <FaHome></FaHome>
                            Home
                        </NavLink>

                    </li>
                        </>
                        
                    }
                    
                </ul>


        
            </div>


            <div className="flex-1">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Dashboard;