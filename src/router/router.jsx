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
      ],
    },
    {
      path:'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          index: true, 
          element: <MyProfile />,
        },
        {
          path: "userProfile",
          element:<MyProfile></MyProfile> ,
        },
        {
          path: "memberProfile",
          element:<MemberProfile></MemberProfile> ,
        },
      ]
    }
  ]);

export default router;