import React,{useEffect} from 'react'
import './payment.css'
const Payment = ({PaymentLink}) => {
  useEffect(()=>{
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
              PaymentLink === '' || PaymentLink === undefined?
              <h1>unable to move forward with paymnet please try again later</h1>
              :
                <form action={PaymentLink}>
                  <button>Click to pay</button>
              </form>
             }
            </div>
    </div>
  )
}

export default Payment