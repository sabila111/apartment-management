import React, { useState } from 'react';
import { AiFillPayCircle, AiOutlinePayCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaBars, FaHome, FaIdeal } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { RiCoupon2Fill } from 'react-icons/ri';
import { TfiAnnouncement } from 'react-icons/tfi';
import {  NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';



const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAdmin] = useAdmin() 
    // const isMember = useMember()
    return (
        <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 h-full bg-gradient-to-r from-cyan-700 to-cyan-500 p-3 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }  md:relative md:translate-x-0 w-64 md:min-h-screen lg:min-h-screen`}
      >
        {/* Close Button (for mobile) */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-white text-2xl absolute top-4 right-4 md:hidden"
        >
          ✖
        </button>

        <ul className="menu space-y-4 text-white font-bold text-lg">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminProfile"}>
                  <CgProfile /> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageMember"}>
                  <IoPeople /> Manage Members
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/makeAnnouncement"}>
                  <TfiAnnouncement /> Make Announcement
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/agreementRequests"}>
                  <FaIdeal /> Agreement Requests
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageCoupons"}>
                  <RiCoupon2Fill /> Manage Coupons
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/memberProfile"}>
                  <CgProfile /> Member Profile
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/makePayment"}>
                  <AiFillPayCircle /> Make Payment
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <AiOutlinePayCircle /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/memberAnnouncement"}>
                  <TfiAnnouncement /> Member Announcement
                </NavLink>
              </li>
            </>
          )}
          <div className="border-2 bg-white"></div>
          <li className="mt-3">
            <NavLink to={"/"}>
              <FaHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-5  md:px-20 ">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-700 text-3xl p-2"
        >
          <FaBars />
        </button>

        <Outlet />
      </div>
    </div>
    );
};

export default Dashboard;