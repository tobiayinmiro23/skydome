import React from 'react'
import './purchased.css'
const Purchased = ({page}) => {
  return (
    <div className='purchased'>
      <div>
       <h1> Congratulations you have successfully purchased a product</h1> 
       </div>
       <div className="purchasedImg">
         <img src="/background/Successful-purchase.png" alt="" />
       </div>
       <div className="btnContainer">
       <button  onClick={()=>page('home')}>Back to home page</button>
       </div>
     </div>
  )
}

export default Purchased