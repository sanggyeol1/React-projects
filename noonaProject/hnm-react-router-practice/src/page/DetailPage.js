import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const params = useParams();

  return (
    <div>
        <h1>상품상세페이지</h1>
        {params.id}
    </div>
  )
}

export default DetailPage