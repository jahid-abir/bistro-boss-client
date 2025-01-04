/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuCard from "../Home/MenuCard";


const MenuCategory = ({ item, img, title }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} />}
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {
                    item.map(menu => <MenuCard key={menu._id} menu={menu} />)
                }
            </div>
           <div className="text-center mb-5">
           <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 text-black ">Order Now</button>
            </Link>
           </div>
        </div>
    );
};

export default MenuCategory;