import React from 'react'
import { Button } from 'react-bootstrap';


const ButtonBox = (props) => {
  return (
    <>
      <div className='button-box'>
        <Button variant="warning" onClick={() => { props.getCurrentLocation() }}>
          현재위치
        </Button>

        
        {
          props.cities.map((item, index) => {
            return (
              <Button variant="warning" key={index} onClick={() => { props.setCity(item) }}>
                {item}
              </Button>
            )
          })
        }
      </div>
    </>
  )
}

export default ButtonBox