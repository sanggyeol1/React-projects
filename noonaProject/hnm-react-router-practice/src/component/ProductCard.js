import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({ item }) => {

    

    return (
        <div className='product-card'>
            <img className='product-image' src={item?.img} />
            <div className='product-imformation'>
                <div className='conscious-choice'>{item?.choice == true ? "Conscious choice" : ""}</div>
                <div>{item?.title}</div>
                <div>\{item?.price}</div>
                <div>{item?.new == true ? "신제품" : ""}</div>
            </div>
        </div>
    )
}

export default ProductCard