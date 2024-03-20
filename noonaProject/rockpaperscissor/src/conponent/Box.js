import React from 'react'

const Box = (props) => {

  const borderColor = getBorderColor(props.result)
  const boxStyle = {
    border: '5px solid ' + borderColor
  }


  function getBorderColor(result) {
    if(result == 'Win') return 'green'
    else if(result == 'Lose') return 'red'
    else return 'black'
  }

  return (
    <div className='box' style={boxStyle}>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.image} />
      <h2>{props.result}</h2>
    </div>
  )
}

export default Box