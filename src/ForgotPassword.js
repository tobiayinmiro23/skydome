import React,{useState} from 'react'
import { getAuth ,sendPasswordResetEmail} from "firebase/auth";
import './forgotPassword.css'
const auth = getAuth();

const ForgotPassword = () => {
    const[email,setemail]=useState('')

    const auth = getAuth();

    const passwordResetEmail=(e)=>{
            e.preventDefault()
            sendPasswordResetEmail(auth,email)
            .then(() => {
              alert('password reset email sent')
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorMessage)
            });
      
      
      }
  return (
    <div className='forgotPassword'>
            <form action="" method=""> 
              <input name="email" onChange={(e)=>setemail(e.target.value)} required placeholder="Email" type="email" />
              <button onClick={(e)=>passwordResetEmail(e)}>Send reset email</button>
            </form>
    </div>
  )
}

export default ForgotPassword