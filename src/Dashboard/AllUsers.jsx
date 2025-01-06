import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Components/SectionTitle";
import useAxiosSecure from "../hook/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleDeleteUser = id => {
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
                axiosSecure.delete(`/users/${id}`)
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

    const handleUpdateUser = id =>{
        axiosSecure.patch(`/users/${id}`)
        .then(res =>{
            if(res.data.acknowledged){
                toast.success('You are Admin Now')
            }
            refetch()
        })
    }

    return (
        <div>
            <SectionTitle subTitle={'How Many??'} title={'manage all users'} />
            <div>
                <h3 className="text-3xl font-bold">All Users : {users.length}</h3>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, idx) => <tr key={user._id}>
                                        <th>{idx + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        {user.role === 'admin' ? "Admin" :
                                            <td onClick={() => handleUpdateUser(user._id)}><FaUsers className="text-3xl text-white bg-orange-500 p-2" /></td>}
                                        <td onClick={() => handleDeleteUser(user._id)}><FaTrash className="text-3xl text-white bg-red-500 p-2" /></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;