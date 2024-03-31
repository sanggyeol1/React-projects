import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import GrandSonBox from './GrandSonBox'

const Box = () => {
    let count = useSelector((state)=>state.count)


  return (

    <>
    <div>Box count = {count}</div>
    <GrandSonBox/>
    </>
    
  )
}

export default Box