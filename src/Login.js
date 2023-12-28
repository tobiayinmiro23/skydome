
import React,{useState} from 'react'
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { Link} from 'react-router-dom';
import User from './User';


function Login() {
  const[password,setpassword]=useState('')
  const[email,setemail]=useState('')
  const [errormsg, seterrormsg] = useState('')
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState('login')

  const auth = getAuth();

  const SignIn = (e)=>{
      e.preventDefault()
    seterrormsg('')
    setloading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setloading(false)
        setpage('user')
      })

      .catch((error) => {
        e.preventDefault()
        const errorCode = error.code;
        const errorMessage = error.message;
        setloading(false)
        seterrormsg(errorCode)
        if(errorCode === 'auth/internal-error') seterrormsg('unable to sign in please try again later')
      });
         
          
  }
     return (
      <div>
        {
            page==='login' ?
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
                            <button className="button" style={{marginTop:"0.5rem"}} onClick={SignIn}>
                              {
                                loading ? <div className="round"></div> : <h3>Sign In</h3>
                              }
                              </button> 
              </form>
            </main>
              </div>
              :
              <User/>

        }
      </div>
  )
}

export default Login
