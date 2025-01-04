import { Link } from 'react-router-dom';
import bgImg from '../../assets/others/authentication.png'
import Img2 from '../../assets/others/authentication2.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Register = () => {
    const {getRegisterUser} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        getRegisterUser(data.email,data.password)
        .then(result =>{
            console.log(result.user)
            toast.success('User Registration Successful.')
        })
        .catch(err => console.log(err))
      }
    return (
        <div className="h-screen flex flex-row-reverse items-center justify-center gap-6" style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div>
                        <img className='h-96' src={Img2} alt="" />
                    </div>
                    <div className="card bg-transparent w-full max-w-lg shrink-0">
                        <h3 className="text-4xl font-bold text-center">Register</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name",{required:true})} className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" placeholder="Photo URL" {...register("photo",{required:true})} className="input input-bordered"  />
                                {errors.photo && <span className='text-red-500'>Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email",{required:true})} className="input input-bordered"  />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password",{required:true,minLength:6,pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).*$/},)} className="input input-bordered" />
                                {errors.password && <span className='text-red-500'>Password is required</span>}
                                {errors.password?.type == 'pattern' && <span className='text-red-500'>Password must be one uppercase, one lowercase, one number & spacial char</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Already have an account?<Link to={'/login'} className='text-orange-500'> Login </Link></p>
                        </form>
                    </div>
                </div>
    );
};

export default Register;