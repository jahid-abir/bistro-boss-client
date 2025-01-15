import { useForm } from "react-hook-form";
import SectionTitle from "../Components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../hook/useAxiosPublic";
import useAxiosSecure from "../hook/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit,reset } = useForm()
    const onSubmit = async (data) => {
        const imageFile = {image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
        const menuItem = {
            name: data.name,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image : res.data.data.display_url,
            category : data.category
        }
        const manuRes = await axiosSecure.post('/menu',menuItem);
        if(manuRes.data.insertedId){
            reset()
            toast.success('Item added Successfully')
        }
    }
    return (
        <div>
            <SectionTitle subTitle={"what's new"} title={'add an item'} />
            <div className="card bg-base-100 w-full shrink-0">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Name *</span>
                        </label>
                        <input type="text" {...register('name')} placeholder="Recipe Name" className="input input-bordered" required />
                    </div>
                    <div className="flex gap-6">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Category *</span>
                            </label>
                            <select {...register('category')} className="select select-bordered w-full">
                                <option disabled selected>Select Category</option>
                                <option value="salad">Salad</option>
                                <option value="dessert">Dessert</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="drink">Drink</option>
                            </select>
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price *</span>
                            </label>
                            <input type="number" {...register('price')} placeholder="Price" className="input input-bordered" required />
                        </div>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    <input {...register('image')} type="file" className="file-input w-full max-w-xs" />
                    <div className="mt-6">
                        <button className="btn btn-primary">Add Item <FaUtensils /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;