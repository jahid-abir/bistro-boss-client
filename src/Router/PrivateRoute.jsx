/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location =useLocation()
    const {user,loader} = useContext(AuthContext)
   
    if(loader){
        return <div className="h-screen grid place-content-center"><span className="loading loading-dots loading-md"></span></div>
    }

    if(user){
        return children;
    }
    return <Navigate state={location} to={'/login'}></Navigate>
};

export default PrivateRoute;