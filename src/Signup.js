import React,{useState} from 'react'
import './Signup.css'
function Signup({user,page}) {
  const[username,setusername]=useState('')
  const[password,setpassword]=useState('')
  const[email,setemail]=useState('')
  const [errormsg, seterrormsg] = useState('')
  const [validEmail, setvalidEmail] = useState(false)
  const [validUsername, setvalidUsername] = useState(false)
  const [validPassword, setvalidPassword] = useState(false)
  const [forPassword, setforPassword] = useState('')
  const [forName, setforName] = useState('')
  const [loading, setloading] = useState(false)

        const handleName=()=>{
          if(username.trim().length < 4){
              setforName(' name must be greater than 3')
              setvalidUsername(false)
          }else{
              setforName(' ')
              setvalidUsername(true)
          }
        }

        function handleEmail(){
          let emailpattern1=/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
          if(email.trim().length < 1){
              seterrormsg('email cannot be empty')
              setvalidEmail(false)
          }
          else if(!emailpattern1.test(email)){
              seterrormsg('invalid email ')
              setvalidEmail(false)
          }
          else{
              seterrormsg('')
              setvalidEmail(true)
          }
        }

        const handlePassword=()=>{
          if(password.trim().length < 7){
              setforPassword(' password must be greater than 6 characters')
              setvalidPassword(false)
          }else{
              setforPassword(' ')
              setvalidPassword(true)
          }
        }
    const registerUser=(e)=>{
      e.preventDefault()
      handleName()
      handleEmail()
      handlePassword()
      if(validEmail && validUsername && validPassword){
        setloading(true)
              fetch('https://ecommercedb1.herokuapp.com/signin',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    name:username,
                    email:email,
                    password:password,
                    joined:new Date()
                })
            }).then(res=>res.json())
            .then(users=>{
              if(users === "an error occured :new users --hashing"){
                setloading(false)
                seterrormsg('email already registered')
              }else{
                user(users)
                seterrormsg('')
                setloading(false)
                page('User')
              }
            }).catch(err=>{
              setloading(false)
              seterrormsg('unable to register user please try again later')
            })
          }
      }
      


  return (
      <div className="Signup">
        <main className="signin">
              <h1>sign up</h1>
      {/* < className="input-content"> */}
              <form  action="">
                <div className="input-f">
                  <div className="img">
                    <img
                      src="/E-commerce pictures/man-user.png"
                      alt=""
                    />
                  </div>
                  <input placeholder="User name" className="Username"   onInput={(e)=>setusername(e.target.value)} value={username} type="text" />
                </div>
                  <p className='error'>{forName}</p>
                <div className="input-f">
                  <div className="img">
                    <img
                      src="/E-commerce pictures/email.png"
                      alt=""
                    />
                  </div>
                  <input  placeholder="Email"  onChange={(e)=>setemail(e.target.value)} value={email} type="email" />
                </div>
                    <p className='error'>{errormsg}</p>
                <div className="input-f">
                  <div className="img">
                    <img
                      src="/E-commerce pictures/padlock.png"
                      alt=""
                    />
                  </div>
                  <input placeholder="password"  onChange={(e)=>setpassword(e.target.value)} value={password}  type="password" />
                </div>
                    <p className='error'>{forPassword}</p>
                  <button onClick={registerUser}>
                    {
                       loading ? <div className="round"></div> : <h3>sign up</h3>
                    }
                  </button>
          </form>
        {/* </div> */}
        </main>
      </div>

        )
}

export default Signup