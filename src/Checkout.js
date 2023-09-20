import './Checkout.css'
import React,{useState} from 'react'
import Payment from './Payment';
const Checkout = ({total}) => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [number, setnumber] = useState('')
  const [address, setaddress] = useState('')
  const [validName,setvalidName]=useState(false)
  const [validEmail,setvalidEmail]=useState(false)
  const [validNumber,setvalidNumber]=useState(false)
  const [validAddress,setvalidAddress]=useState(false)
  const [validPayment, setvalidPayment] = useState(false)
  const [animateBtn, setanimateBtn] = useState(false)
  const [paymentLink, setpaymentLink] = useState('')


 const handleName=()=>{
 let nameInput=document.querySelectorAll('.Checkout .contact  input')[0]

    if(name.trim().length === 0){
        nameInput.classList.add('inputerror')
        setvalidName(false)
    }else{
       nameInput.classList.remove('inputerror')
       setvalidName(true)
    }
}
 const handleAddress=()=>{
  let textarea=document.querySelectorAll('.Checkout .contact  textarea')[0]
    if(address.trim().length === 0){
        textarea.classList.add('inputerror')
        setvalidAddress(false)
    }else{
       textarea.classList.remove('inputerror')
       setvalidAddress(true)

    }
}

 const handleNumber=()=>{
 let numberInput=document.querySelectorAll('.Checkout .contact  input')[2]
    const numberPattern=/((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/
    if(numberPattern.test(number) === false || number.length < Number(10)){
       numberInput.classList.add('inputerror')
       setvalidNumber(false)
    }
    else{
       numberInput.classList.remove('inputerror')
       setvalidNumber(true)
    }    
}

function handleEmail(){
     let emailInput=document.querySelectorAll('.Checkout .contact  input')[1]
    let emailpattern1=/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    let emailpattern2=/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;

    if(emailpattern1.test(email)=== false  ){
       emailInput.classList.add('inputerror')
       setvalidEmail(false)
    }
    else{
       emailInput.classList.remove('inputerror')
       setvalidEmail(true)
    }
}

  const handleButton=(e)=>{
    e.preventDefault()
    setvalidPayment(false)
    if(validName && validEmail && validAddress  && validNumber){
      setanimateBtn(true)
          fetch("https://skydomee.onrender.com/pay",{
                method:'post',
                headers:{
                  "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    email
                })
              }).then(res=>res.json())
              .then(res=>{
                if (res.status === false){
                  setvalidPayment(false)
                  setanimateBtn(false)
                  alert(res.message)
                }else{
                  setpaymentLink(res?.data?.authorization_url)
                  setvalidPayment(true)
                }
              })
              .catch(err=>{
                setanimateBtn(false)
                setvalidPayment(false)
                if(err.message === 'Failed to fetch'){
                  alert('an error, occured please try again later')
                }
              })   
    }else{
    e.preventDefault()
    handleNumber()
    handleName()
    handleEmail()
    handleAddress()
    }
  }
  return (
    <div className='Checkout'>
         {
          validPayment ?

          <Payment paymentLink={paymentLink}/>
          :

          <section className="contact">
            <form action='' >
                <input type="text" className='inp'  required placeholder="name" value={name}  onInput={(e)=>setname(e.target.value)} onChange={()=>handleName()} name="" id=""/>
                <input type="email" required placeholder="email" value={email} onInput={(e)=>setemail(e.target.value)} onChange={()=>handleEmail()} name="" id=""/>
                <input type="number" required placeholder="number" value={number} onInput={(e)=>setnumber(e.target.value)} onChange={()=>handleNumber()} name="" id=""/>
                <textarea required placeholder="address" value={address} onInput={(e)=>setaddress(e.target.value)} onChange={()=>handleAddress()} ></textarea>
                  <div className="btnContainer">
                    <button onClick={(e)=>handleButton(e)}>
                        {
                          animateBtn ?
                            <div className="round"></div>
                            :
                            <div >
                              <h4>Proceed to payment</h4> 
                              <div className="price">
                                <h3>&#8358;</h3>
                                <h3>{total.toLocaleString()}</h3>
                              </div>
                            </div>
                        }
                  </button>
                  </div>
            </form>
         </section>
         }
    </div>
  )
}

export default Checkout
