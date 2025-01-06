import { FcGoogle } from "react-icons/fc";
import useAuth from "../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../hook/useAxiosPublic";


const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {loginWithGoogle} = useAuth()
    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(result =>{
            const userInfo = {name:result.user.displayName,email:result.user.email}
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data)
            })
            navigate(location?.state ? location?.state : '/')
            toast.success('Google Login Successful')
        })
    }
    return (
        <div className="divider mt-6">
            <button onClick={handleGoogleLogin} className="btn btn-outline"><FcGoogle className="mr-3"/> Login With Google</button>
        </div>
    );
};

export default SocialLogin;