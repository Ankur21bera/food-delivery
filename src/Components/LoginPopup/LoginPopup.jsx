import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Sign Up");
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
         <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
         </div>
         <div className='login-popup-inputs'>
            {currState==="Login"?<></>: <input type="text" placeholder='Enter Your Name' required />}
         <input type="email" placeholder='Enter Your Email' required/>
         <input type="password" placeholder='Enter Your Password' required />
         </div>
         <button>{currState==="Sign Up"?"Create account":"Login"}</button>
         <div className='login-popup-condition'>
           <input type="checkbox" required />
           <p>By Continuing i agree to the terms of privacy policy</p>
         </div>
          {currState==="Sign Up"
           ?<p>Create a new account? <span onClick={()=>setCurrState("Login")}>Click Here</span></p>
           :<p>Already Have An Account? <span onClick={()=>setCurrState("Sign Up")}>Login Here</span></p>
          }
      </form>
    </div>
  )
}

export default LoginPopup