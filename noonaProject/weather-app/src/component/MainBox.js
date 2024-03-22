import React from 'react'

const MainBox = ({weather}) => {

    
    return (

        <div className='main-box'>
            <div className='text-box'>
                <h3>{weather&&weather.name}</h3>
                <h1>섭씨 : { weather?.main?.temp }°C / 화씨 : {weather?.main?.temp*1.8 + 32}°F</h1>
                <h2>{weather?.weather?.[0]?.description}</h2>
            </div>
        </div>

    )
}

export default MainBox