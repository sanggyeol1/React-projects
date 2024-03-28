import React from 'react';
import DetailPage from '../page/DetailPage'
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PrivateRoute = ({ authenticate }) => {

    const [productList, setProductList] = useState([])

    const getProducts = async () => {
        let url = 'https://my-json-server.typicode.com/sanggyeol1/React.js/products'
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        authenticate == true ? <DetailPage productList={productList} /> : <Navigate to='/login' />
    )
}

export default PrivateRoute