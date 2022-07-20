import React,{useState} from 'react'
import './Signup.css'

const ChangePassword = () => {
    const[password,setpassword]=useState('')
    const[password2,setpassword2]=useState('')
    const[email,setemail]=useState('')
    const [errormsg, seterrormsg] = useState('')
    const [forPassword, setforPassword] = useState('')
    const [forName, setforName] = useState('')
  return (
    <div className='ChangePassword'>
        <div className='loginWrapper'>
            <main className="login">
                <h1>Change password</h1>
                <div className="input-content">
                <form action="" method=""> 
                    <input name="email" onChange={(e)=>setemail(e.target.value)} value={email} required placeholder="Email" type="email" />
                    <input name="password" required onChange={(e)=>setpassword(e.target.value)} value={password} placeholder="password" type="password" />
                    <input name="password" required onChange={(e)=>setpassword2(e.target.value)} value={password2} placeholder="password" type="password" />
                    <p className="error">{errormsg}</p>
                    <button className="button" >change password</button> 
                </form>
                </div>
            </main>
         </div>
    </div>
  )
}

export default ChangePassword