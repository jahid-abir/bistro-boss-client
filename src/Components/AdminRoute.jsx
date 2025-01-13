/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useAdmin from "../hook/useAdmin";


const AdminRoute = ({children}) => {
    const location = useLocation()
    const {user,loader} =useAuth();
    const {isAdmin,isAdminLoading} = useAdmin()
    
    if(loader || isAdminLoading){
        return <div className="h-screen grid place-content-center"><span className="loading loading-dots loading-md"></span></div>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/" state={location} ></Navigate>
};

export default AdminRoute;