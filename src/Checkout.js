import './Checkout.css'
import React,{useState} from 'react'
import { Link} from 'react-router-dom';
  
const Checkout = ({handlePaymentLink,total}) => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [number, setnumber] = useState('')
  const [address, setaddress] = useState('')
  const [errormsg, seterrormsg] = useState('')
  const [error, seterror] = useState(false)
  const [validName,setvalidName]=useState(false)
  const [validEmail,setvalidEmail]=useState(false)
  const [validNumber,setvalidNumber]=useState(false)
  const [validAddress,setvalidAddress]=useState(false)

  const handleInput=()=>{
    let textarea=document.querySelectorAll('.Checkout .contact  textarea')[0]
    let inputs=document.querySelectorAll('.Checkout .contact  input')
  if(textarea.value.trim() === ''){
    textarea.classList.add('inputerror')
  }else{
    textarea.classList.remove('inputerror')
  }
  inputs.forEach(item=>{
      if(item.value.trim() === ''){
        item.classList.add('inputerror')
      }else{
        item.classList.remove('inputerror')
      }
    })
 }

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
    if(numberPattern.test(number) === false || number.length !==Number(11)){
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
    if(emailpattern1.test(email)=== false ){
       emailInput.classList.add('inputerror')
       setvalidEmail(false)
    }
    else{
       emailInput.classList.remove('inputerror')
       setvalidEmail(true)
    }
}

  const handleButton=(e)=>{
    if(validName && validAddress && validEmail && validNumber ){
          fetch(process.env.URL,{
                method:'post',
                headers:{
                  "Content-Type":"application/json",
                  "authorization":process.env.AUTHORIZATION_KEY
                },
                body:JSON.stringify({
                    email
                })
              }).then(res=>res.json())
              .then(res=>{
                console.log(res)
                if (res.status === false) alert(res.message)
                if (res === 'unauthorized user') alert(res)
                handlePaymentLink(res?.data?.authorization_url)
              })
              .catch(err=>{
                alert(err)
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
      <div></div>
         <section className="contact">
            <form action='' >
                <div className="error">{errormsg}</div>
                <input type="text" className='inp'  required placeholder="name" value={name}  onInput={(e)=>setname(e.target.value)} name="" id=""/>
                <input type="email" required placeholder="email" value={email} onInput={(e)=>setemail(e.target.value)}  name="" id=""/>
                <input type="number" required placeholder="number" value={number} onInput={(e)=>setnumber(e.target.value)}  name="" id=""/>
                <textarea required placeholder="address" value={address} onInput={(e)=>setaddress(e.target.value)} ></textarea>
                <Link to='/payment'>
                  <div className="btnContainer"><button onClick={(e)=>handleButton(e)}>Proceed to payment <h4>{`(${total})`}</h4></button></div>
                  </Link>
            </form>
    </section>
    </div>
  )
}

export default Checkout
