import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {

    const params = useParams();

  return (
    <div>
        <h1>showProductDetail{params.id}{params.num}</h1>
    </div>
  )
}

export default ProductDetailPage