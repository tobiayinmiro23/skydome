import React,{useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link} from 'react-router-dom';
import {auth} from './firebase'
import './Signup.css'
function Signup({user}) {
  const[password,setpassword]=useState('')
  const[email,setemail]=useState('')
  const [errormsg, seterrormsg] = useState('')
  const [loading, setloading] = useState(false)
  const [valid, setvalid] = useState(false)
  const provider= new GoogleAuthProvider()

 const googleSignin=(e)=>{
  if(valid===false){
    e.preventDefault()
  }
    signInWithPopup(auth, provider)
    .then((result) => {
      setvalid(true)
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      setvalid(false)
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('unable to sign up try again later')
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
   
  }


    const SignUp = (e) =>{
      if(valid===false){
        e.preventDefault()
      }
        seterrormsg('')
        setloading(true)
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            setvalid(true)
            setloading(false)
          })
          .catch((error) => {
            setvalid(false)
            const errorCode = error.code;
            const errorMessage = error.message;
            setloading(false)
            seterrormsg(errorCode)
          if(errorCode === 'auth/internal-error') seterrormsg('unable to sign up please try again later')
          if(errorCode === 'auth/weak-password') seterrormsg('password should be atleast 6 characters')
          });
      }

  return (
      <div className="Signup">
          <div className="googleWrapper">
          <Link to='/user'>
              <div className="signInWithGoogle" onClick={(e)=>googleSignin(e)}>
                  <div className="img"><img src="/E-commerce pictures/search.png" alt="google"  /></div>
                      <h3>Sign up with Google</h3>
              </div>
          </Link>
          </div>
        <main className="signin">
              <h1>Sign Up</h1>
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
                    <p className='error'>{errormsg}</p>
                    <Link to='/user'>
                        <button className="button" onClick={(e)=>SignUp(e)}>
                          {
                            loading ? <div className="round"></div> : <h3>Create account</h3>
                          }
                          </button> 
                    </Link>
          </form>
        </main>
      </div>

        )
}

export default Signup