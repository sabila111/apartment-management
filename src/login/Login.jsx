import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";



const Login = () => {
  const axiosPublic = useAxiosPublic()
  const { signIn } = useContext(AuthContext)
  const provider = new GoogleAuthProvider
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState('')


  const handleGoogle = () => {
    signInWithPopup(auth, provider)
    .then(result =>{
      console.log(result.user)
      const userInfo ={
          email: result.user?.email,
          name: result.user?.displayName
      }
      axiosPublic.post('/user', userInfo)
      .then(res => 
          {
              console.log(res.data)
              navigate(location?.state? location.state : '/')
          })
   })
      .catch(error => {
        console.error(error.message)
      })
  }

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)

    setError('')

    signIn(email, password)
      .then(result => {

      })
    navigate(location?.state ? location.state : '/')
      .catch(error => {
        console.error(error)

        alert('Please enter correct info')
      })



  }

  return (
    <div className=" min-h-screen bg-gradient-to-r from-cyan-800 to-cyan-500 ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-52">
    
        <div className="card  w-full max-w-sm  ">
          <h1 className="text-5xl font-bold ml-8 mt-20 text-white">Login now</h1>

          <form onSubmit={handleLogin} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-base font-semibold">Password</span>
              </label>
              <input type='password' placeholder="password" name="password" className="input input-bordered" required />
            </div>
            <div className=" mt-5">
              <button className="px-4 py-3 rounded-lg bg-cyan-800 text-white">Login</button>
            </div>

            <div className="divider">OR</div>

            {
              error && <p className='text-red-600 '>{error}</p>
            }

          </form>


          <div className="flex justify-between">
            <button onClick={handleGoogle} className="-mt-9 p-2  ml:80 md:ml-8 lg:ml-8 bg-white text-2xl rounded-full mx-8 lg:mx-0 w-10 lg:w-10 h-10 text-white"><FcGoogle /></button>

            <button className="text-blue-600 p-2 ml:80 md:ml-8 lg:ml-8 bg-white text-2xl rounded-full mx-8 lg:mx-0 w-10 lg:w-10 h-10 -mt-8"><FaFacebookF /></button>
            <button className=" p-2 ml:80 md:ml-8 lg:ml-8 bg-white text-2xl rounded-full mx-8 lg:mx-0 w-10 lg:w-10 h-10 -mt-8"><FaGithub /></button>
          </div>


          <p className="text-center mt-4">Don't have an account? Please <Link className="text-white font-bold" to={'/register'}>Register</Link></p>

        </div>


      </div>
   
    </div>
  );
};

export default Login;