import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import bgImg from '../../assets/others/authentication.png'
import Img1 from '../../assets/others/authentication2.png'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const { getLoginUser } = useContext(AuthContext)
    const [disable, setDisable] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogInFrom = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        getLoginUser(email,password)
        .then(result => {
            console.log(result.user)
            toast.success('User Login Successful.')
        })
        .catch(err => console.log(err))
    }

    const handleVerifyCaptcha = (e) => {
        const user_captcha_value = e.target.value
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    return (
        <div className="h-screen flex items-center justify-center gap-6" style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div>
                <img className='h-96' src={Img1} alt="" />
            </div>
            <div className="card bg-transparent w-full max-w-lg shrink-0">
                <h3 className="text-4xl font-bold text-center">Login</h3>
                <form onSubmit={handleLogInFrom} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <LoadCanvasTemplate />
                        <label className="label">
                            <span className="label-text">Captcha</span>
                        </label>
                        <input onBlur={handleVerifyCaptcha} type="text" placeholder="Enter Captcha" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button disabled={disable} className="btn btn-primary">Login</button>
                    </div>
                    <p>New to the website?<Link to={'/register'} className='text-orange-500'> Register </Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;