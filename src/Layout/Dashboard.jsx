import { FaAd, FaBars, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;
    return (
        <div className="flex">
            <div className='w-96 min-h-screen bg-[#D1A054]'>
                <h3 className="text-4xl font-bold text-center">BISTRO BOSS</h3>
                <h2 className="text-3xl font-bold text-center uppercase mb-24">Restaurant</h2>
                <div className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to={'/dashboard/adminHome'}><FaHome /> Admin Home</NavLink></li>
                                <li><NavLink to={'/dashboard/reservation'}><FaList/> Add Items</NavLink></li>
                                <li><NavLink to={'/dashboard/payment'}><FaBars /> Manage Item</NavLink></li>
                                <li><NavLink to={'/dashboard/manageBooking'}><FaCalendarDays /> Manage Booking</NavLink></li>
                                <li><NavLink to={'/dashboard/users'}><FaUsers/>All Users</NavLink></li>
                            </> :
                            <>
                                <li><NavLink to={'/dashboard/home'}><FaHome /> User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/reservation'}><FaCalendar /> Reservation</NavLink></li>
                                <li><NavLink to={'/dashboard/payment'}><FaWallet /> Payment History</NavLink></li>
                                <li><NavLink to={'/dashboard/cart'}><FaShoppingCart /> Cart</NavLink></li>
                                <li><NavLink to={'/dashboard/review'}><FaAd /> Add Review</NavLink></li>
                                <li><NavLink to={'/dashboard/booking'}><FaCalendarDays /> My Booking</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome /> Home</NavLink></li>
                    <li><NavLink to={'/menu'}><FaBars /> Menu</NavLink></li>
                    <li><NavLink to={'/contact'}><MdEmail /> Contact</NavLink></li>
                </div>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;