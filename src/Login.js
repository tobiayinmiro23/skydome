import React,{useState} from 'react'
import { getAuth, signInWithEmailAndPassword ,sendPasswordResetEmail} from "firebase/auth";
// import {auth} from './firebase'
import { Link} from 'react-router-dom';

function Login({user}) {
  const[password,setpassword]=useState('')
  const[email,setemail]=useState('')
  const [errormsg, seterrormsg] = useState('')
  const [loading, setloading] = useState(false)
  const [valid, setvalid] = useState(false)
  const auth = getAuth();

    const SignIn = (e)=>{
      if(valid===false){
        e.preventDefault()
      }
      seterrormsg('')
      setloading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setvalid(true)
          setloading(false)
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setvalid(false)
          setloading(false)
          seterrormsg(errorCode)
          if(errorCode === 'auth/internal-error') seterrormsg('unable to sign in please try again later')
        });
           
            
    }
     return (
        <div className="Signup">
      <main className="signin">
            <h1>sign in</h1>
            <form  action="">
              <div className="input-f">
                <div className="img">
                  <img
                    src="/E-commerce pictures/email.png"
                    alt=""
                  />
                </div>
                <input  placeholder="Email"  onChange={(e)=>setemail(e.target.value)} value={email} type="email" />
              </div>
              <div className="input-f">
                <div className="img">
                  <img
                    src="/E-commerce pictures/padlock.png"
                    alt=""
                  />
                </div>
                <input placeholder="password"  onChange={(e)=>setpassword(e.target.value)} value={password}  type="password" />
              </div>
              <p className="forgotPassswordLink"><Link to='/forgotpassword' > forgot password ?</Link></p>
                  <p className='error'>{errormsg}</p>
                  <Link to='/user'>
                      <button className="button" style={{marginTop:"0.5rem"}} onClick={SignIn}>
                        {
                          loading ? <div className="round"></div> : <h3>Sign In</h3>
                        }
                        </button> 
                  </Link>
        </form>
      </main>
        </div>
  )
}

export default Login
