import React from 'react'
import { Link } from 'react-router-dom'
 
const Unavailable = () => {
  return (
    <div className='purchased' >
      <div>
       <h1>This section is currently unavailable</h1> 
       </div>
       <div className="btnContainer">
       <Link to="/"><button >Back to home page</button></Link>
      
       </div>
    </div>
  )
}

export default Unavailable