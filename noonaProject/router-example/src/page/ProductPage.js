import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {

    let [query, setQuery] = useSearchParams()
    console.log(query.get('q'))
    console.log(query.get('page'))
  return (
    <div>
        <h1>ProductPage입니다.</h1>
    </div>
  )
}

export default ProductPage