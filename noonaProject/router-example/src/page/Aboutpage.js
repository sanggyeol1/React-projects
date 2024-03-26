import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
    const navigate = useNavigate()
    const goToHomepage = () =>{
        navigate('/')
    }

    return (
        <>
            <div>Aboutpage</div>
            <button onClick={()=>{goToHomepage()}}>GotoHomepage</button>
        </>
    )
}

export default Aboutpage