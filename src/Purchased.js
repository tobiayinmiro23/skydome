import React from 'react'
import { Link } from 'react-router-dom'
import './purchased.css'
const Purchased = () => {
  return (
    <div className='purchased'>
      <div>
       <h1> Congratulations you have successfully purchased a product</h1> 
       </div>
       <div className="purchasedImg">
         <img src="/background/Successful-purchase.png" alt="" />
       </div>
       <div className="btnContainer">
       <Link to="/"><button >Back to home page</button></Link>
       </div>
     </div>
  )
}

export default Purchased