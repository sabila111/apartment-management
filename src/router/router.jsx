import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../home/Home";
import MainLayout from "../mainLayout/MainLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);

export default router;