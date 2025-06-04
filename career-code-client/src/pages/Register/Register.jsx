import Lottie from 'lottie-react'
import React, { use } from 'react'
import registerLottie from '../../assets/lotties/register.json'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'
import SocialLogin from '../Shared/SocialLogin'
import { useNavigate } from 'react-router'

const Register = () => {

  const {createUser} =use(AuthContext)
  const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const from = e.target 
        const email = from.email.value 
        const password = from.password.value 


        // create user
        createUser(email, password)
          .then(result => {
             console.log(result.user)
             navigate('/')
          })
          .catch(error => {
            console.log(error.message)
          })
    }
    
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <Lottie style={{width:'300px'}} animationData={registerLottie} loop={true}/>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Register now!</h1>
         <form action="" onSubmit={handleRegister}>
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
         </form>
         <SocialLogin />
      </div>
    </div>
  </div>
</div>
  )
}

export default Register