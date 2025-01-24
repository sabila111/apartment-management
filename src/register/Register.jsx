
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash,  FaFacebookF, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.init";


const Register = () => {

  
  const { CreateUser,UpdateUser  } = useContext(AuthContext)
  const [registerError, setRegisterError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [success, setSuccess] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  const handleRegister = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photoURL = form.photoURL.value
    console.log(email, password, photoURL, name)

    setRegisterError('')
    setSuccess('')

    if (password.length < 6) {
      setRegisterError('Password should be at least 6 character or longer')
    }
    else if (!/[A-Z]/.test(password)) {
      setRegisterError('your password should contain uppercase')
      return
    }
    else if (!/[a-z]/.test(password)) {
      setRegisterError('your password should contain lowercase')
      return
    }

    CreateUser(email, password)
      .then(result => {
        console.log(result.user)
        toast.success('User Created Successfully')
       
        setTimeout(()=> {
          navigate(location?.state ? location.state : '/')
        }, 3000)

       
      })
      
      .catch(error => {
        console.error(error)
        // alert('Email already existed')
      })
      .then(result => {
        
        return UpdateUser(name, photoURL)
      })

  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-700 to-cyan-400">
      <div className="hero-content flex-col lg:flex-row-reverse gap-52">
        
        <div className="card  w-full max-w-sm shrink-0 ">
          <h1 className="text-5xl font-bold ml-8 mt-8 text-white">Register now</h1>

          <form onSubmit={handleRegister} className="card-body">

            <div className="form-control ">
              <label className="label">
                <span className="label-text text-base font-semibold">Name</span>
              </label>
              <input type="text" placeholder="name" name="name" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">Photo</span>
              </label>
              <input type="text" placeholder="photo url" name="photoURL" className="input input-bordered" required />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-base font-semibold">Password</span>
              </label>
              <input type={showPassword ? 'text' : "password"} placeholder="password" name="password" className="input input-bordered" required />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-4 top-[52px]"
              >
                {
                  showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
              </button>
            </div>
            <div className=" mt-5">
              <button className="px-4 py-3 rounded-lg bg-indigo-800 text-white">Register</button>
            </div>

            <div className="divider">OR</div>

            {
              registerError && <p className='text-red-600 '>{registerError}</p>
            }
            {
              success && <p className="text-lime-600 ">{success}</p>
            }

          </form>


          <div className="flex justify-between">
          <button onClick={handleGoogle} className="-mt-9 p-2  ml:80 md:ml-8 lg:ml-8 bg-white text-2xl rounded-full mx-8 lg:mx-0 w-10 lg:w-10 h-10 text-white"><FcGoogle /></button>

          <button className="text-blue-600 p-2 ml:80 md:ml-8 lg:ml-8 bg-white text-2xl rounded-full mx-8 lg:mx-0 w-10 lg:w-10 h-10 -mt-8"><FaFacebookF /></button>
          <button className=" p-2 ml:80 md:ml-8 lg:ml-8 bg-white text-2xl rounded-full mx-8 lg:mx-0 w-10 lg:w-10 h-10 -mt-8"><FaGithub /></button>
          </div>


          <p className="text-center mt-4">Already have an account? Please <Link className="text-white font-bold" to={'/login'}>Login</Link></p>

        </div>

        
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;