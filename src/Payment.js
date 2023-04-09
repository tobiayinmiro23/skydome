import React,{useEffect,useState} from 'react'
import './payment.css'
const Payment = ({PaymentLink}) => {
  const [valid, setvalid] = useState(false)
  useEffect(()=>{
    let wrapper=document.querySelectorAll('.Payment .wrapper')[0]
    let animation=document.querySelectorAll('.Payment .loading')[0]
    setTimeout(()=>{
      animation.classList.add('none')
      wrapper.classList.remove('none')
  },3000)

  },[])
   
 
   
 useEffect(()=>{
   if(PaymentLink !== '' && PaymentLink !== undefined){
    setvalid(true)
  }
 },[PaymentLink])
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
             valid ?
              <div>
                 <form action={PaymentLink} target='_blank'>
                  <button>Click to pay</button>
              </form>
             </div>
             :
             <div className="disabledBtn">
              <div className="round"></div>
             </div>
             }
            </div>
    </div>
  )
}

export default Payment