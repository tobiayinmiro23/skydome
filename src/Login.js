import React,{useState} from 'react'
import './Login.css'
function Login({user,page}) {
  const[password,setpassword]=useState('')
  const[email,setemail]=useState('')
  const[errormessage,seterrormessage]=useState('')
  const [loading, setloading] = useState(false)
//  for posting user  input to the database to validate user
    const handleLogin=(e)=>{
      e.preventDefault()
      setloading(true)
      fetch('https://ecommercedb1.herokuapp.com/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
          email:email,
          password:password
      })
    }).then(res=>res.json())
    .then(data=>{
      if (data.id){
          seterrormessage('')
          user(data)
          setloading(false)
          page('User')
      }else{
        seterrormessage('incorrect user name or password')
        setloading(false)
      }
    }).catch(err=>{
      console.log('an error occured',err)
      setloading(false)
      seterrormessage('an error occured ,please try again later')
    })

    }
  return (
    <div className='loginWrapper'>
      <main className="login">
          <h1>Login</h1>
          <div className="input-content">
          <form action="" method=""> 
              <input name="email" onChange={(e)=>setemail(e.target.value)} value={email} required placeholder="Email" type="email" />
              <input name="password" required onChange={(e)=>setpassword(e.target.value)} value={password} placeholder="password" type="password" />
              <p className="error">{errormessage}</p>
              <button className="button" onClick={handleLogin}>
                {
                  loading ? <div className="round"></div> : <h3>Log in</h3>
                }
                </button> 
          </form>
          </div>
      </main>
    </div>
  )
}

export default Login