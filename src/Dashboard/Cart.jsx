
import { MdDelete } from "react-icons/md";
import SectionTitle from "../Components/SectionTitle";
import useCart from "../hook/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";


const Cart = () => {
    const { cart,refetch } = useCart()
    let totalPrice = 0;
    for (const item of cart) {
        totalPrice += item.price
    }
    const axiosSecure = useAxiosSecure()
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.acknowledged) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                              refetch()
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle subTitle={'My cart'} title={'wanna add more?'} />
            <div className="flex items-center justify-evenly">
                <h3 className="text-3xl font-bold">Total Order : {cart.length}</h3>
                <h3 className="text-3xl font-bold">Total Price : {totalPrice}</h3>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td><img className="h-8 w-8" src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td onClick={() => handleDelete(item._id)}><MdDelete className="text-2xl text-red-500" /></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;