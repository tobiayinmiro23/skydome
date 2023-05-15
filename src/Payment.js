import React,{useEffect,useState} from 'react'
import './payment.css'
const Payment = ({PaymentLink}) => {
  const [valid, setvalid] = useState(false)
  const [error, seterror] = useState(false)
  const handleAnimation=()=>{
      let wrapper=document.querySelectorAll('.Payment .wrapper')[0]
      let animation=document.querySelectorAll('.Payment .loading')[0]
      animation.classList.add('none')
      wrapper.classList.remove('none')
  }
  useEffect(()=>{
   setTimeout(()=>{
    handleAnimation()
    seterror(true)
  },240000)
  },[])
   
 useEffect(()=>{
   if(PaymentLink !== '' && PaymentLink !== undefined){
          handleAnimation()
          seterror(false)
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
             valid === true &&
              <div>
                 <form action={PaymentLink} target='_blank'>
                  <button>Click to pay</button>
              </form>
             </div>
             }
             {error === true && <h1>Unable to proceed with payment ,please try again later</h1>}
            </div>
    </div>
  )
}

export default Payment
