/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../hook/useAxiosSecure";
import useCart from "../hook/useCart";


const FoodCard = ({item}) => {
    const {refetch} = useCart()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const location = useLocation()
    const {user} = useAuth()
    const {name,recipe,image,price,_id} = item
    const handleAddItem = () =>{
        if(user && user.email){
            // cart item add to database 
            const cartItem = {
                menuId : _id,
                email : user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.acknowledged){
                    toast.success(`${name} added successful`);
                }
                refetch()
            })
        }
        else{
            Swal.fire({
                title: "You Are not Logged In",
                text: "Do You Want to Logged In ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, I want!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:location})
                }
              });
        }
    }
    return (
        <div className="card bg-base-100 rounded-none w-96 shadow-xl">
            <figure>
                <img className="w-full"
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="bg-black text-white absolute top-5 right-5 p-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddItem} className="btn btn-outline border-0 border-b-4 text-orange-600">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;