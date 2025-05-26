import React, { use } from 'react'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'
import signinLottet  from '../../assets/lotties/signin.json'
import Lottie from 'lottie-react'


const SignIn = () => {

     const {signInUser} =use(AuthContext)
    
        const handleSignin = e => {
            e.preventDefault()
            const from = e.target 
            const email = from.email.value 
            const password = from.password.value 
    
    
            // sign in user
            signInUser(email, password)
              .then(result => {
                 console.log(result.user)
              })
              .catch(error => {
                console.log(error.message)
              })
        }

  return (
     <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <Lottie style={{width:'400px'}} animationData={signinLottet} loop={true}/>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Sign in  now!</h1>
         <form action="" onSubmit={handleSignin}>
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign in</button>
        </fieldset>
         </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default SignIn