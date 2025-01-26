import React from 'react';
import { AiFillPayCircle, AiOutlinePayCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { TfiAnnouncement } from 'react-icons/tfi';
import {  NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex gap-7">
            <div className="w-64 min-h-screen bg-gradient-to-r from-cyan-700 to-cyan-500">
                {/* user */}
                <ul className="menu p-5">
                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/userProfile'}><CgProfile /> My Profile</NavLink>
                        </li>

                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/announcement'}><TfiAnnouncement /> Announcement</NavLink>
                        </li>

                    <div className=" border-2 bg-white"></div>
                    <li className="text-white font-bold text-lg mt-3">
                        <NavLink to={'/'}>
                            <FaHome></FaHome>
                            Home
                        </NavLink>

                    </li>
                </ul>


{/* member */}
                
                <ul className="menu p-5">
                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/memberProfile'}><CgProfile /> My Profile</NavLink>
                        </li>

                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/makePayment'}><AiFillPayCircle /> Make payment</NavLink>
                        </li>

                    <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/paymentHistory'}><AiOutlinePayCircle />Payment History</NavLink>
                        </li>

                        <li className="text-white font-bold text-lg">
                        <NavLink to={'/dashboard/announcement'}><TfiAnnouncement /> Announcement</NavLink>
                        </li>

                    <div className=" border-2 bg-white"></div>
                    <li className="text-white font-bold text-lg mt-3">
                        <NavLink to={'/'}>
                            <FaHome></FaHome>
                            Home
                        </NavLink>

                    </li>
                </ul>


            </div>


            <div className="flex-1">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Dashboard;