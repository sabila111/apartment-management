import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

   if(loading){
    return <div className="flex justify-center items-center h-screen">
    <span className="loading loading-spinner loading-lg"></span>
  </div>
  
   }

    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;