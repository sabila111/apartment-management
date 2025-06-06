import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../home/Home";
import MainLayout from "../mainLayout/MainLayout";
import Login from "../login/Login";
import Register from "../register/Register";
import Error from "../error/Error";
import Apartment from "../home/apartment/Apartment";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "../privateRoute/PrivateRoute";
import MyProfile from "../pages/Dashboard/userDashboard/MyProfile";
import MemberProfile from "../pages/Dashboard/memberDashboard/MemberProfile";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import ManageMember from "../pages/Dashboard/Admin/ManageMember";
import AdminRoute from "../privateRoute/AdminRoute";
import AdminAnnouncement from "../pages/Dashboard/Admin/AdminAnnouncement";
import AdminAgreement from "../pages/Dashboard/Admin/AdminAgreement";
import AdminCoupon from "../pages/Dashboard/Admin/AdminCoupon";
import Announcement from "../pages/Dashboard/userDashboard/Announcement";
import Payment from "../pages/Dashboard/memberDashboard/Payment/Payment";
import MakePayment from "../pages/Dashboard/memberDashboard/Payment/MakePayment";
import ContactUs from "../home/contact/ContactUs";
import UserGuide from "../pages/userGuide/UserGuide";
import AdminOverview from "../pages/Dashboard/Admin/AdminOverview";
import UserOverview from "../pages/Dashboard/userDashboard/UserOverview";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/apartment",
          element: <Apartment></Apartment>,
        },
        {
          path: "/contact",
          element: <ContactUs></ContactUs>,
        },
        {
          path: "/guide",
          element: <UserGuide></UserGuide>,
        },
      ],
    },
    {
      path:'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
       
        {
          path: "userProfile",
          element:<MyProfile></MyProfile> ,
        },
        {
          path: "announcement",
          element:<Announcement></Announcement> ,
          loader: () => fetch('https://12-assignment-server-smoky.vercel.app/announcement')
        }, 
        {
          path: "memberAnnouncement",
          element:<PrivateRoute><Announcement></Announcement></PrivateRoute> ,
          loader: () => fetch('https://12-assignment-server-smoky.vercel.app/announcement')
        }, 
        {
          path: "memberProfile",
          element:<MemberProfile></MemberProfile> ,
        },
        {
          path: "makePayment",
          element:<Payment></Payment> ,
        },
        {
          path: "payment",
          element:<MakePayment></MakePayment> ,
        },
        {
          path: "adminProfile",
          element:<AdminRoute><AdminProfile></AdminProfile> </AdminRoute>,
        },
        {
          path: "adminOverview",
          element:<AdminRoute><AdminOverview></AdminOverview></AdminRoute>,
        },
        {
          path: "manageMember",
          element:<AdminRoute><ManageMember></ManageMember></AdminRoute> ,
        },
        {
          path: "memberOverview",
          element:<AdminRoute><UserOverview></UserOverview></AdminRoute> ,
        },
        {
          path: "makeAnnouncement",
          element:<AdminRoute><AdminAnnouncement></AdminAnnouncement></AdminRoute> ,
        },
        {
          path: "agreementRequests",
          element:<AdminRoute><AdminAgreement></AdminAgreement></AdminRoute> ,
          loader: () => fetch('https://12-assignment-server-smoky.vercel.app/apartment')
        },
        {
          path: "manageCoupons",
          element:<AdminRoute><AdminCoupon></AdminCoupon></AdminRoute> ,
          loader: () => fetch('https://12-assignment-server-smoky.vercel.app/coupon')
        },
      ]
    }
  ]);

export default router;