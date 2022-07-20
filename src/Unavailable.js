import React from 'react'

const Unavailable = ({page}) => {
  return (
    <div className='purchased' >
      <div>
       <h1>This section is currently unavailable</h1> 
       </div>
       <div className="btnContainer">
       <button  onClick={()=>page('home')}>Back to home page</button>
       </div>
    </div>
  )
}

export default Unavailable