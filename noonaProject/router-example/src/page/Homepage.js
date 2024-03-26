import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()
    const goProductPage = () =>{
        navigate('/product?q=pants&page=3')
    }
     return (
        <>
            <h1>Homepage</h1>
            <Link to="/about">about페이지로</Link>
            <button onClick={()=>{
                goProductPage()
            }}>팬츠 페이지로</button>
            
        </>
    )
}

export default Homepage