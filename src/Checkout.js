import React,{useState,useEffect} from 'react'
import Footer from './Footer'
const Checkout = ({page,total,setcartCount,setcart,cartId,setcartId}) => {
     // for information about a product
     const [productInformation,setproductInformation]=useState({})
     // for getting customer details
     const [landmark,setlandmark]=useState('')
     const [customersName,setcustomersName]=useState('')
     const [customersEmail,setcustomersEmail]=useState('')
     const [customersPhoneNumber,setcustomersPhoneNumber]=useState('')
     const [customersCardNumber,setcustomersCardNumber]=useState('')
     const [customersExpirationDate,setcustomersExpirationDate]=useState('')
     const [customersCvDate,setcustomersCvDate]=useState('')
     // valid inputs
     const [validCustomersName,setvalidCustomersName]=useState(false)
     const [validCustomersEmail,setvalidCustomersEmail]=useState(false)
     const [validCustomersPhoneNumber,setvalidCustomersPhoneNumber]=useState(false)
     const [validCustomersCardNumber,setvalidCustomersCardNumber]=useState(false)
     const [validCustomersExpirationDate,setvalidCustomersExpirationDate]=useState(false)
     const [validCustomersCvDate,setvalidCustomersCvDate]=useState(false)
     const [validLandmark,setvalidLandmark]=useState(false)
     // for error inputs
     const [errorCustomersCardNumber,seterrorCustomersCardNumber]=useState(false)
     const [errorCustomersExpirationDate,seterrorCustomersExpirationDate]=useState(false)
     const [errorCustomersCvDate,seterrorCustomersCvDate]=useState(false)
     // for invalid input error message
     const [forName,setforName]=useState('')
     const [forEmail,setforEmail]=useState('')
     const [forPhoneNumber,setforPhoneNumber]=useState('')
     const [forLandmark,setforLandmark]=useState('')
     var productname=[]
     var productprice=[]
     var quantity=[]
     // for buyers name
     const handleName=()=>{
         if(customersName.trim().length < 4){
             setforName(' name must be greater than 3')
             setvalidCustomersName(false)
         }else{
             setforName(' ')
             setvalidCustomersName(true)
         }
     }
     // for buyers address/landmark
     const handleLandmark=()=>{
             if(landmark.trim().length<3 ){
                 setforLandmark('landmark cannot be less than 3 words')
                 setvalidLandmark(false)
             } else{
                 setforLandmark('')
                 setvalidLandmark(true)
             }
     }
     // for buyers email
     function handleEmail(){
         let emailpattern1=/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
         let emailpattern2=/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
         if(customersEmail.trim().length < 1){
             setforEmail('email cannot be empty')
             setvalidCustomersEmail(false)
         }
         else if(!emailpattern1.test(customersEmail) || !emailpattern1.test(customersEmail)){
             setforEmail('invalid email')
             setvalidCustomersEmail(false)
         }
         else{
             setforEmail('')
             setvalidCustomersEmail(true)
         }
     }
     // for buyers phone number
     const handleNumber=()=>{
         const numberPattern=/((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/
         if(numberPattern.test(customersPhoneNumber) && customersPhoneNumber.length ===Number(11)){
             setforPhoneNumber('')
             setvalidCustomersPhoneNumber(true)
         }
         else{
             setforPhoneNumber('invalid number')
             // addition just below
             setvalidCustomersPhoneNumber(false)
         }    
     }
     // for atm  card number
     const handleCardnumber=(e)=>{
         if(customersCardNumber.length < Number(16)){
             setvalidCustomersCardNumber(false)
             seterrorCustomersCardNumber(true)
         }else{
              setvalidCustomersCardNumber(true)
              seterrorCustomersCardNumber(false) 
         }
     }
     // for atm card expiration date
     const handleExpiration=()=>{
         if(customersExpirationDate.length!==Number(4)){
              setvalidCustomersExpirationDate(false)
              seterrorCustomersExpirationDate(true)
             }else{
             setvalidCustomersExpirationDate(true)
             seterrorCustomersExpirationDate(false)
         }
     }
     // for atm card cv code
     const handleCv=()=>{
         if(customersCvDate.length!==Number(3)){
              setvalidCustomersCvDate(false)
              seterrorCustomersCvDate(true)
             }else{
             setvalidCustomersCvDate(true)
             seterrorCustomersCvDate(false)
         }
     }
     useEffect(()=>{
        cartId.map(item=>{
            productname.push(item.productname)
            productprice.push(item.productprice)
            quantity.push( item.quantity)
          })
          
        },[])
     // for validation of all input fields
     const handleAll=(e)=>{
            e.preventDefault()
             handleName()
             handleLandmark()
             handleEmail()
             handleNumber()
             handleCardnumber()
             handleExpiration()
             handleCv()
             if(validCustomersPhoneNumber && validCustomersCardNumber && validCustomersCvDate && validCustomersEmail &&  validCustomersExpirationDate && validCustomersName && validLandmark){
                 handleBoughtItems()
                  setcartId([])
                  setcart(false)
                  setcartCount(0)
                 page('purchased')
             }
     }
    
     // for getting a product information
     const handleBoughtItems=()=>{
         fetch('https://ecommercedb1.herokuapp.com/cleared',{
           method:'post',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify({
             productname:productname,
             pproductprice:productprice,
             productquantity:quantity,
             orderdate:new Date(),
             paymentstatus : true,
             email:customersEmail,
             phonenumber:customersPhoneNumber,
             buyersname:customersName,
             address:landmark
           })
       }).then(res=>res.json())
       .catch(err=>console.log('an error occured',err))
     }
     
  return (
    <div>
    <div className='laptopCheckout'>
       
{/* <!-- product image --> */}
<div className="center" >
        <div className="clearance">
            <div className="clearanceitem">
                <p className="forlandmark">{forLandmark}</p>
                <textarea className=" generalclearance landmark" onChange={(e)=>setlandmark(e.target.value)} value={landmark} placeholder="landmark"></textarea>
                <div className="buyerinfo">
                    <h1>buyers info</h1>
                    <div className="buyer">
                        <p className="forname">{forName}</p>
                        <input placeholder="name" className="buyername"  onChange={(e)=>setcustomersName(e.target.value) } value={customersName} type="text"/>
                    </div>
                    <div className="buyersname">
                        <p className="foremail" >{forEmail}</p>
                        <input  className="binp" placeholder="email"  onChange={(e)=>setcustomersEmail(e.target.value)} value={customersEmail} onInput={handleEmail} type="email"/>
                    </div>
                    <div className="buyersname">
                        <p className="fornumber">{forPhoneNumber}</p>
                        <input className="number"  onChange={(e)=>setcustomersPhoneNumber(e.target.value)} value={customersPhoneNumber}  placeholder="number" type="number"/>
                    </div>
                    
                </div>
                
            </div>
        </div>   
    </div>
    <div className="payment">
        <div className="buyitemcontainer">
            <h1>payment detail</h1>
            <div style={{fontFamily:"font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}} className="buyitem">
                <select  name="" id="paysel">
                    <option>mastercard</option>
                    <option>verve</option>
                    <option> visa</option>
                </select>
                    <label  className={errorCustomersCardNumber? "redcolor": "cnl cardnotext"} style={{fontWeight:'bolder'}}>card number</label>
                    <input type="number"  maxLength={16} onChange={(e)=>setcustomersCardNumber(e.target.value)} value={customersCardNumber}  placeholder="Card number" required className="cardno"/>
                    <div className="input">
                        <div className="input1">
                            <label  className={errorCustomersExpirationDate? "redcolor": "exptext"}>exp<span className="hide">iration date</span> </label>
                            <input type="number"  maxLength={3} onChange={(e)=>setcustomersExpirationDate(e.target.value)} value={customersExpirationDate} placeholder="exp date" required className="expdate"/>
                        </div>
                        <div className="input2">
                            <label className={errorCustomersCvDate? "redcolor": "cvtext"} >cv code</label>
                        <input type="number"  maxLength={3} onChange={(e)=>setcustomersCvDate(e.target.value)} value={customersCvDate}  placeholder="cv" required className="cv"/>
                        </div>
                        <div className="input3">
                            <label >total</label>
                            <input type="tel" placeholder="total" required value={total.toLocaleString()} className="amt"/>
                        </div>
                        
                    </div>
                    <div className="buybtncontainer">
                    <button onClick={handleAll} className="buybtn">buy item</button>
                    </div>
            </div>
        </div>
        <div className="deliverymethod">
            <h1 className="deliveryheading">select delivery method</h1>
            <div className="door delivery">
                <div className="img imga">
                    <img src="/productimage/delivery.png" alt=""/>
                </div>
                <div className="deliveryinfo">
                    <h2>door delivery</h2>
                    <p>shipping fee &#8358;700</p>
                    <p>ready for delivery four days after order </p>
                    
                </div>
            </div>
            <div className="pickup delivery">
                <div className="img imgb">
                    <img src="/productimage/pickup.png" alt=""/>
                </div>
                <div className="deliveryinfo">
                    <h2>pickup station</h2>
                    <p>shipping fee &#8358;200</p>
                    <p>ready for delivery four days after order </p>
                </div>
            </div>
            {/* <!-- addition --> */}
            <div className="return ">
                <div className="img imgc">
                    <img src="/productimage/package.png" alt=""/>
                </div>
                <div className="returnpolicy deliveryinfo">
                    <h2>return policy</h2>
                    <p>free return of product to skydome if product is not what you ordered or product arrived damaged</p>
                </div>
            </div>
        </div>
            
        </div>
       
    </div>
    <Footer/>
      <div className="loader">
        <div className="loader1"></div>
        <div className="loader2"></div>
        <div className="loader3"></div>
      </div>
    </div>
  )
}

export default Checkout