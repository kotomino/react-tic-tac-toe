import React from 'react'

const Square = ({value, index, squareClicked}) =>{
  
  const handleClick = () => {
    if(value === "") {
      squareClicked(index)
    }
    
  }

  return (
    <div className="square" onClick={handleClick}>
      <h1 className="input">{value}</h1>
    </div>
  )
}

export default Square
