import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle";
import useMenu from "../hook/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";


const ManageItem = () => {
    const { menu,refetch } = useMenu()
    const axiosSecure = useAxiosSecure()
    const handleDeleteItem = id =>{
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
                        axiosSecure.delete(`/menu/${id}`)
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
            <SectionTitle subTitle={'Hurry up'} title={'manage all user'} />
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td><img className="w-10 h-10" src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td><FaEdit className="text-3xl text-white bg-orange-500 p-2" /></td>
                                    <td onClick={() => handleDeleteItem(item._id)}><FaTrash className="text-3xl text-white bg-red-500 p-2" /></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;