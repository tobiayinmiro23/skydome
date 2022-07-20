import React from 'react'

const User = ({user}) => {
  return (
    <h1  style={{textAlign:'center',paddingTop:'6rem',}}>{`welcome  ${user.name}`}</h1>
  )
}

export default User