import React, { useEffect,useState } from 'react'
import { getAuth,onAuthStateChanged } from "firebase/auth";


const User = () => {
  const [email, setemail] = useState('')
  useEffect(
    ()=>{
  
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setemail(user.email)
      }
    });

    let wrapper=document.querySelectorAll('.Payment .wrapper')[0]
    let animation=document.querySelectorAll('.Payment .loading')[0]
    wrapper.classList.add('none')
      // to remove the loading animation
      setTimeout(()=>{
        animation.classList.add('none')
        wrapper.classList.remove('none')
      },2000)
  
  },[])
  return (
    <div className='Payment'>
    <div  className="loading">
      <div className="loader">
        <div className="loader1"></div>
        <div className="loader2"></div>
        <div className="loader3"></div>
      </div>
    </div>
        <div className='wrapper'>
        {
          email !==''?
          <h1  style={{textAlign:'center',paddingTop:'3rem'}}>{`welcome  ${email}`}</h1>
          :
          <h1  style={{textAlign:'center',paddingTop:'3rem'}}>User currently not signed in</h1>
         }
        </div>
</div>
  )
}

export default User