import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname === '/login' || location.pathname === '/register'
    return (
        <div className="container mx-auto">
            { noHeaderFooter || <Navbar/>}
            <Outlet/>
            {noHeaderFooter ||  <Footer/>}
        </div>
    );
};

export default Root;