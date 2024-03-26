import React from 'react'
import { Button } from 'react-bootstrap';


const ButtonBox = (props) => {
  return (
    <>
      <div className='button-box'>
        <Button variant={props.city == 'currentLocation'? 'warning':"outline-warning"} onClick={() => { 
          props.getCurrentLocation()
          props.setCity('currentLocation')  
        }}>
          CurrentLocation
        </Button>


        {
          props.cities.map((item, index) => {
            return (
              <Button variant={props.city == item ? "warning" : "outline-warning"} key={index} onClick={() => {
                props.setCity(item)
              }}>
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